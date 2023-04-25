import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Array<Recipe> = [
    new Recipe(
      'Pizza',
      'Its yummy',
      'https://emvwr2994ad.exactdn.com/wp-content/uploads/2021/10/bast-finpizza-stockholm.jpg?strip=all&lossy=1&quality=77&resize=795%2C480&ssl=1'
    ),
  ];
}
