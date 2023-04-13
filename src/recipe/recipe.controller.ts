import { Controller, Get, Post } from '@nestjs/common';

@Controller('recipe')
export class RecipeController {
  @Post()
  createRecipe(): string {
    return 'Hello World!';
  }
}
