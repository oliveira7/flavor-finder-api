import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';

@Module({
  providers: [RecipeController, RecipeService],
})
export class RecipeModule {}
