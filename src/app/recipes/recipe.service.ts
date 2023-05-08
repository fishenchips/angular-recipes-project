import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Array<Recipe> = [
    new Recipe(
      'Pizza1',
      'Its yummy',
      'https://emvwr2994ad.exactdn.com/wp-content/uploads/2021/10/bast-finpizza-stockholm.jpg?strip=all&lossy=1&quality=77&resize=795%2C480&ssl=1'
    ),
    new Recipe(
      'Pizza2',
      'Its yummy',
      'https://emvwr2994ad.exactdn.com/wp-content/uploads/2021/10/bast-finpizza-stockholm.jpg?strip=all&lossy=1&quality=77&resize=795%2C480&ssl=1'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //create new array
  }

  constructor() {}
}
