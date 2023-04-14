import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { recipesProviders } from './recipes.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RecipesController],
  providers: [RecipesService, ...recipesProviders],
})
export class RecipesModule {}
