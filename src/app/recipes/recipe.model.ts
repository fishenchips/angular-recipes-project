import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Array<Ingredient>;

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingrediensts: Array<Ingredient>
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingrediensts;
  }
}
