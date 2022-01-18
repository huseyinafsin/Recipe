import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] =[
    new Recipe('A Test Recipe',' This is simply a  test', 'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Turkish-Tas-Kebabı-Recipe.jpg'),
    new Recipe('A Test Recipe',' This is simply a  test','https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Raw-Meatballs-with-Meat-Etli-Cig-Kofte-.png'),
    new Recipe('A Test Recipe',' This is simply a  test', 'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Izmir-Meatball-Recipe.jpg'),
    new Recipe('A Test Recipe',' This is simply a  test', 'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Turkish-Meat-Saute-Recipe.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe :Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
