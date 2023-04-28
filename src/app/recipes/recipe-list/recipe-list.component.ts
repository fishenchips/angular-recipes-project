import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
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

  onSelectRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
