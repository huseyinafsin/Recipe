import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Kebap',
  //     ' This is simply a  test',
  //     'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Turkish-Tas-Kebabı-Recipe.jpg',
  //     [
  //       new Ingredient('Meat',1),
  //       new Ingredient('French Fries',3)
  //     ]
  //   ),
  //   new Recipe(
  //     'Testi kebabı',
  //     ' This is simply a  test',
  //     'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Raw-Meatballs-with-Meat-Etli-Cig-Kofte-.png',
  //     [
  //       new Ingredient('Meat',1),
  //       new Ingredient('French Fries',3)
  //     ]
  //   ),
  //   new Recipe(
  //     'Lolaz Dürüm',
  //     ' This is simply a  test',
  //     'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Izmir-Meatball-Recipe.jpg',
  //     [
  //       new Ingredient('Meat',1),
  //       new Ingredient('French Fries',3)
  //     ]
  //   ),
  //   new Recipe(
  //     'Kuru Fasulye',
  //     ' This is simply a  test',
  //     'https://www.turkfoodsrecipes.com/wp-content/uploads/2019/11/Turkish-Meat-Saute-Recipe.jpg',
  //     [
  //       new Ingredient('Meat',1),
  //       new Ingredient('French Fries',3)
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = []
  constructor(private shoppingListService:ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes.slice()[index]
  }

  setRecipes(recipes : Recipe[] ){
    this.recipes  = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }
  addIngredientsToShoppingList(ingredients :Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice())
  }
}

