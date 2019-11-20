import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  dropRef = false;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipe.ingredients.map((value) => {
      this.shoppingListService.addIngredient(value);
    });
  }
}

