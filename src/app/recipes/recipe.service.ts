import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test',
          'https://discovery-latam-prod.imgix.net/files/inline-images/TIPS_ARROZ_MEDIDA.JPG',
          [
              new Ingredient('Meat', 1),
              new Ingredient('Chicken', 2)
          ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}
