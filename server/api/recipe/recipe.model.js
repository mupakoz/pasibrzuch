'use strict';

import mongoose from 'mongoose';
import {Schema} from 'mongoose';

var RecipeSchema = new Schema({
  name:String,
  description: String,
  ingredients: [String],
  categories: [String]
});

export default mongoose.model('Recipe', RecipeSchema);
