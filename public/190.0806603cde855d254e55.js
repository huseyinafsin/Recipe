"use strict";(self.webpackChunkrecipe=self.webpackChunkrecipe||[]).push([[190],{190:(A,g,r)=>{r.r(g),r.d(g,{ShoppingListModule:()=>T});var p=r(665),u=r(266),a=r(4466),t=r(639),c=r(2457),h=r(9102),f=r(9985),l=r(8583);const v=["f"];function S(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){return t.CHM(n),t.oxw().onDelete()}),t._uU(1,"Delete"),t.qZA()}}let Z=(()=>{class e{constructor(n){this.shoppingListService=n,this.editMode=!1}ngOnInit(){this.subscription=this.shoppingListService.startedEditing.subscribe(n=>{this.editedItemIndex=n,this.editMode=!0,this.editedItem=this.shoppingListService.getIngredient(n),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}ngOnDestroy(){this.subscription.unsubscribe()}onSubmit(n){const i=n.value,s=new f.o(i.name,i.amount);this.editMode?this.shoppingListService.updateIngredient(this.editedItemIndex,s):this.shoppingListService.addIngredient(s),this.editMode=!1,n.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.shoppingListService.deleteIngredient(this.editedItemIndex),this.onClear()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c._))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-edit"]],viewQuery:function(n,i){if(1&n&&t.Gf(v,5),2&n){let s;t.iGM(s=t.CRH())&&(i.slForm=s.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","required","","ngModel","",1,"form-control"],["type","submit",1,"btn","btn-success",2,"margin","3px",3,"disabled"],["class","btn btn-danger","style","margin: 3px;","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",2,"margin","3px",3,"click"],["type","button",1,"btn","btn-danger",2,"margin","3px",3,"click"]],template:function(n,i){if(1&n){const s=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(s);const m=t.MAs(3);return i.onSubmit(m)}),t.TgZ(4,"div",0),t.TgZ(5,"div",4),t.TgZ(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7),t.TgZ(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA(),t.qZA(),t.TgZ(13,"div",0),t.TgZ(14,"div",1),t.TgZ(15,"button",10),t._uU(16),t.qZA(),t.YNc(17,S,2,0,"button",11),t.TgZ(18,"button",12),t.NdJ("click",function(){return i.onClear()}),t._uU(19,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const s=t.MAs(3);t.xp6(15),t.Q6J("disabled",!s.valid),t.xp6(1),t.Oqu(i.editMode?"Update":"Add"),t.xp6(1),t.Q6J("ngIf",i.editMode)}},directives:[p._Y,p.JL,p.F,p.Fj,p.JJ,p.On,p.Q7,p.wV,l.O5],styles:[""]}),e})();function b(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const d=t.CHM(n).index;return t.oxw().onEditItem(d)}),t._uU(1),t.qZA()}if(2&e){const n=o.$implicit;t.xp6(1),t.AsE(" ",n.name," (",n.amount,") ")}}let C=(()=>{class e{constructor(n,i){this.shoppingListService=n,this.loggingService=i}ngOnInit(){this.ingredients=this.shoppingListService.getIngredients(),this.igChangeSub=this.shoppingListService.ingredientsChanged.subscribe(n=>{this.ingredients=n})}onEditItem(n){this.shoppingListService.startedEditing.next(n)}ngOnDestroy(){this.igChangeSub.unsubscribe(),this.loggingService.printlog("Hello from shoppingList ngOnInit")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c._),t.Y36(h.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor:pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-shopping-edit"),t._UZ(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,b,2,2,"a",3),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngForOf",i.ingredients))},directives:[Z,l.sg],styles:[""]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.u5,u.Bz.forChild([{path:"",component:C}]),a.m]]}),e})()}}]);