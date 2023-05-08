import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe(
      'Vesuvio',
      'Its yummy',
      'https://emvwr2994ad.exactdn.com/wp-content/uploads/2021/10/bast-finpizza-stockholm.jpg?strip=all&lossy=1&quality=77&resize=795%2C480&ssl=1',
      [
        new Ingredient('Tomato sauce', 5),
        new Ingredient('Ham', 3),
        new Ingredient('Cheese', 5),
      ]
    ),
    new Recipe(
      'Kebabpizza',
      'Its yummy',
      'https://emvwr2994ad.exactdn.com/wp-content/uploads/2021/10/bast-finpizza-stockholm.jpg?strip=all&lossy=1&quality=77&resize=795%2C480&ssl=1',
      [
        new Ingredient('Tomato Sauce', 4),
        new Ingredient('Kebab meat', 4),
        new Ingredient('Lettuce', 2),
        new Ingredient('Tomato', 1),
        new Ingredient('Kebab Sauce', 3),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //create new array
  }

  constructor() {}
}
