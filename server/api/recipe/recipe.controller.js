'use strict';

import Recipe from './recipe.model';
import User from '../user/user.model';

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

export function categories(req, res) {
  var userId = req.user._id;

  return User.findById(userId).exec().then(user =>
      res.status(200).json(user.categories)
    )
    .catch(handleError(res));
}

export function create(req, res) {
  var recipe = new Recipe(req.body);
  var userId = req.user._id;

  return User.findById(userId).exec().then(user => {

      recipe.save(function (err, recipe) {
        console.log('added recipe: ' + recipe);
        user.recipes.push(recipe);
        user.save();
        res.status(200).json(recipe)
      }).catch(handleError(res));

    })
    .catch(handleError(res));
}

export function findAll(req, res) {
  var userId = req.user._id;

  return User
    .findById(userId)
    .populate('recipes')
    .select('recipes')
    .then(function (userWithRecipes) {
      console.log(userWithRecipes);
      res.status(200).json(userWithRecipes.recipes);
    })
    .catch(handleError(res))
}
