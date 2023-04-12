import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { RecipeService } from './recipe/recipe.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    RecipeModule,
    UserModule,
  ],
  controllers: [UserController, RecipeController],
  providers: [UserService, RecipeService],
})
export class AppModule {}
