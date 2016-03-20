/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Recipe from '../api/recipe/recipe.model'

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
      'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
      'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
      'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
      'tests alongside code. Automatic injection of scripts and ' +
      'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
      'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
      'payload, minifies your scripts/css/images, and rewrites asset ' +
      'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
      'and openshift subgenerators'
    });
  });

var localUser = null;

User.find({}).remove()
  .then(() => {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      })
      .then((users) => {
        localUser = users;
        console.log('finished populating users');
        createSampleRecipes();
      });
  });

function createSampleRecipes() {
  Recipe.find({}).remove().then(() => {
    var recipe = sampleRecipe();

    localUser.recipes.push(recipe);

    recipe.save().then(() =>
      localUser.save().then(() =>
        console.log('recipe added to user')
      )
    );
  });
}

function sampleRecipe() {
  return new Recipe({
    name: 'Kasza jaglana ze szparagami, suszonymi pomidorami i fetą',
    ingredients: [
      '50 g Kasza jaglana',
      '250 g Szparagi zielone (lub fasolka szparagowa)',
      '20 g Pomidory suszone w oleju',
      '250 g Bulion warzywny z kostki (lub wywar z włoszczyzny)',
      '15 g Słonecznik, nasiona',
      '5 g Olej rzepakowy uniwersalny',
      '80 g Ser Feta 12% tłuszczu'
    ],
    description: `Do niedużego garnka wsypać kaszę i wlać bulion. Doprawić solą, pieprzem, przykryć i
      zagotować. Gotować pod przykryciem przez 13 minut. Na 3 minuty przed końcem gotowania
      kaszy dodać szparagi, wcześniej należy je opłukać, uciąć twarde końce, łodyżki pokroić na 3
      cm kawałki. Wymieszać kaszę ze szparagami, zamknąć garnek i gotować wszystko przez
      ostatnie 3 minuty. Do kaszy dodać resztę składników: odsączone i pokrojone suszone
      pomidory, posiekany szczypiorek oraz lekko zrumieniony na suchej patelni słonecznik.
        Wszystko skropić olejem, doprawić solą, oregano i pieprzem. Wymieszać i posypać pokruszoną
      fetą.`,
    categories: 'Obiad'
  });
}


