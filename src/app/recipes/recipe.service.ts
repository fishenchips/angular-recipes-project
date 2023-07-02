import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  //  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //create new array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice()); //emit new value
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
