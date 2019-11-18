import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  dropRef = false;
  constructor() { }

  ngOnInit() {
  }
}
