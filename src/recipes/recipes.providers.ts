import { Mongoose } from 'mongoose';
import { RecipeSchema } from './schemas/recipe.schema';

export const recipesProviders = [
  {
    provide: 'RECIPE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Recipe', RecipeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
