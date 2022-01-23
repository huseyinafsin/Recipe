import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      ' This is simply a  test',
      'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Turkish-Tas-Kebabı-Recipe.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',3)
      ]
    ),
    new Recipe(
      'A Test Recipe',
      ' This is simply a  test',
      'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Raw-Meatballs-with-Meat-Etli-Cig-Kofte-.png',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',3)
      ]
    ),
    new Recipe(
      'A Test Recipe',
      ' This is simply a  test',
      'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Izmir-Meatball-Recipe.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',3)
      ]
    ),
    new Recipe(
      'A Test Recipe',
      ' This is simply a  test',
      'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Turkish-Meat-Saute-Recipe.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',3)
      ]
    ),
  ];

  constructor(private shoppingListService:ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes.slice()[index]
  }

  addIngredientsToShoppingList(ingredients :Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
