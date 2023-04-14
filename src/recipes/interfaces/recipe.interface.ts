import { Document } from 'mongoose';

export interface Recipe extends Document {
  readonly name: string;
  readonly description: string;
  readonly ingredients: string[];
  readonly steps: string[];
  readonly servings: number;
  readonly prepTime: number;
}
