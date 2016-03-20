'use strict';

import Recipe from './recipe.model';
import User from '../user/user.model';

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
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
