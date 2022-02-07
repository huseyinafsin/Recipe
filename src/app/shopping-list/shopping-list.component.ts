import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  private igChangeSub : Subscription;
  constructor(private shoppingListService :ShoppingListService, private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
    this.loggingService.printlog('Hello from shoppingList ngOnInit')
  }

}
