import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(
        'https://angular-recipes-88f18-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }

  getRecipes() {
    this.http
      .get<Recipe[]>(
        'https://angular-recipes-88f18-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) =>
          recipes.map((recipe) => ({
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          }))
        )
      )
      .subscribe((recipes) => this.recipeService.setRecipes(recipes));
  }
}
