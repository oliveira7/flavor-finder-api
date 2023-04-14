import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString({ each: true })
  @IsNotEmpty()
  ingredients: string[];

  @IsString({ each: true })
  @IsNotEmpty()
  steps: string[];

  @IsOptional()
  servings: number;

  @IsOptional()
  prepTimeInMin: number;
}
