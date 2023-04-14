import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
  steps: [String],
  servings: Number,
  prepTime: Number,
});
