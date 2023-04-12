import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {
  @Prop({ required: true })
  name: string;

  @Prop()
  servings: number;

  @Prop()
  description: string;

  @Prop({ required: true })
  ingredients: string[];

  @Prop({ required: true })
  instructions: string[];

  @Prop()
  image: string;

  @Prop()
  preparationTimeInMin: number;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
