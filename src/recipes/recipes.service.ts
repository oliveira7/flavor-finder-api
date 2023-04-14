import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Recipe } from './interfaces/recipe.interface';

@Injectable()
export class RecipesService {
  constructor(
    @Inject('RECIPE_MODEL') private readonly recipeModel: Model<Recipe>,
  ) {}

  findAll() {
    return this.recipeModel.find().exec();
  }

  findOne(id: string) {
    const recipe = this.recipeModel
      .findById({ _id: id })
      .select({
        ingredients: 1,
        steps: 1,
      })
      .exec();
    return recipe;
  }

  create(recipe: any) {
    const createdRecipe = new this.recipeModel(recipe);
    return createdRecipe.save();
  }
}
