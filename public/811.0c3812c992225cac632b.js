"use strict";(self.webpackChunkrecipe=self.webpackChunkrecipe||[]).push([[811],{4811:(J,m,p)=>{p.r(m),p.d(m,{RecipeModule:()=>k});var o=p(665),s=p(266),h=p(4466),f=p(5257),T=p(8002),e=p(639),A=p(6955);let R=(()=>{class t{constructor(i,n){this.authService=i,this.router=n}canActivate(i,n){return this.authService.user.pipe((0,f.q)(1),(0,T.U)(c=>!!c||this.router.createUrlTree(["/auth"])))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(A.e),e.LFG(s.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=p(5496),q=p(1300),d=p(8583);function _(t,r){if(1&t&&(e.TgZ(0,"li",10),e._uU(1),e.qZA()),2&t){const i=r.$implicit;e.xp6(1),e.AsE(" ",i.name," - ",i.amount," ")}}let C=(()=>{class t{constructor(i,n,c){this.recipeService=i,this.route=n,this.router=c}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.recipe=this.recipeService.getRecipe(this.id)})}onaddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u.j),e.Y36(s.gz),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropDown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.qZA(),e.TgZ(3,"div",0),e.TgZ(4,"div",1),e.TgZ(5,"h1"),e._uU(6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",0),e.TgZ(8,"div",1),e.TgZ(9,"div",3),e.TgZ(10,"button",4),e._uU(11,"Manage Recipe "),e._UZ(12,"span",5),e.qZA(),e.TgZ(13,"ul",6),e.TgZ(14,"li"),e.TgZ(15,"a",7),e.NdJ("click",function(){return n.onaddToShoppingList()}),e._uU(16,"To Shopping List"),e.qZA(),e.qZA(),e.TgZ(17,"li"),e.TgZ(18,"a",7),e.NdJ("click",function(){return n.onEditRecipe()}),e._uU(19,"Edit Recipe"),e.qZA(),e.qZA(),e.TgZ(20,"li"),e.TgZ(21,"a",7),e.NdJ("click",function(){return n.onDeleteRecipe()}),e._uU(22,"Delete Recipe"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",0),e.TgZ(24,"div",1),e._uU(25),e.qZA(),e.qZA(),e.TgZ(26,"div",0),e.TgZ(27,"div",1),e.TgZ(28,"ul",8),e.YNc(29,_,2,2,"li",9),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH),e.xp6(4),e.Oqu(n.recipe.name),e.xp6(19),e.hij(" ",n.recipe.description," "),e.xp6(4),e.Q6J("ngForOf",n.recipe.ingredients))},directives:[q.w,d.sg],styles:[""]}),t})();function S(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",17),e.TgZ(1,"div",18),e._UZ(2,"input",19),e.qZA(),e.TgZ(3,"div",20),e._UZ(4,"input",21),e.qZA(),e.TgZ(5,"div",20),e.TgZ(6,"button",4),e.NdJ("click",function(){const l=e.CHM(i).index;return e.oxw().onDeleteIngredient(l)}),e._uU(7,"X"),e.qZA(),e.qZA(),e.qZA()}2&t&&e.Q6J("formGroupName",r.index)}let g=(()=>{class t{constructor(i,n,c){this.route=i,this.recipeServie=n,this.router=c,this.editMode=!1}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.editMode=null!=i.id,this.initForm()})}onSubmit(){this.editMode?this.recipeServie.updateRecipe(this.id,this.recipeForm.value):this.recipeServie.addRecipe(this.recipeForm.value),this.onCancel()}get controls(){return this.recipeForm.get("ingredients").controls}onAddIngredient(){this.recipeForm.get("ingredients").push(new o.cw({name:new o.NI(null,o.kI.required),amount:new o.NI(null,[o.kI.required,o.kI.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(i){this.recipeForm.get("ingredients").removeAt(i)}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let i="",n="",c="",l=new o.Oe([]);if(this.editMode){const a=this.recipeServie.getRecipe(this.id);if(i=a.name,n=a.imagePath,c=a.description,a.ingredients)for(let v of a.ingredients)l.push(new o.cw({name:new o.NI(v.name,o.kI.required),amount:new o.NI(v.amount,[o.kI.required,o.kI.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new o.cw({name:new o.NI(i,o.kI.required),imagePath:new o.NI(n,o.kI.required),description:new o.NI(c,o.kI.required),ingredients:l})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.gz),e.Y36(u.j),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name",1,"form-group"],["type","text","formControlName","name","id","name",1,"form-control"],["for","imagePath"],["type","text","formControlName","imagePath","id","imagePath","alt","",1,"form-control"],["imagePath",""],["alt","",1,"img-responsive",3,"src"],["for","description"],["type","text","formControlName","description","id","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",0),e.TgZ(4,"div",1),e.TgZ(5,"button",3),e._uU(6,"Save"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return n.onCancel()}),e._uU(8,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",0),e.TgZ(10,"div",1),e.TgZ(11,"div",5),e.TgZ(12,"label",6),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",7),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"div",0),e.TgZ(16,"div",1),e.TgZ(17,"div",5),e.TgZ(18,"label",8),e._uU(19,"Image Url"),e.qZA(),e._UZ(20,"input",9,10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",0),e.TgZ(23,"div",1),e._UZ(24,"img",11),e.qZA(),e.qZA(),e.TgZ(25,"div",0),e.TgZ(26,"div",1),e.TgZ(27,"div",5),e.TgZ(28,"label",12),e._uU(29,"Description"),e.qZA(),e._UZ(30,"textarea",13),e.qZA(),e.qZA(),e.qZA(),e.TgZ(31,"div",0),e.TgZ(32,"div",14),e.YNc(33,S,8,1,"div",15),e._UZ(34,"hr"),e.TgZ(35,"div",0),e.TgZ(36,"div",1),e.TgZ(37,"button",16),e.NdJ("click",function(){return n.onAddIngredient()}),e._uU(38,"Add Ingredient"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const c=e.MAs(21);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(19),e.Q6J("src",c.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",n.controls)}},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.CE,d.sg,o.x0,o.wV],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"h3"),e._uU(1,"Please Selecet a Recipe"),e.qZA())},styles:[""]}),t})();var y=p(3649);let Z=(()=>{class t{constructor(i,n){this.dataStorageService=i,this.recipeService=n}resolve(i,n){const c=this.recipeService.getRecipes();return 0===c.length?this.dataStorageService.fetchRecipes():c}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(y.Z),e.LFG(u.j))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const F=function(t){return[t]};let I=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(i,n){1&i&&(e.TgZ(0,"a",0),e.TgZ(1,"div",1),e.TgZ(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA(),e.qZA()),2&i&&(e.Q6J("routerLink",e.VKq(5,F,n.index)),e.xp6(3),e.Oqu(n.recipe.name),e.xp6(2),e.Oqu(n.recipe.description),e.xp6(2),e.Q6J("src",n.recipe.imagePath,e.LSH)("alt",n.recipe.description))},directives:[s.yS,s.Od],styles:[""]}),t})();function U(t,r){if(1&t&&e._UZ(0,"app-recipe-item",4),2&t){const n=r.index;e.Q6J("recipe",r.$implicit)("index",n)}}let x=(()=>{class t{constructor(i,n,c){this.recipeService=i,this.router=n,this.route=c}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(i=>{this.recipes=i}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u.j),e.Y36(s.F0),e.Y36(s.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return n.onNewRecipe()}),e._uU(3,"New Recipe"),e.qZA(),e.qZA(),e.qZA(),e._UZ(4,"hr"),e.TgZ(5,"div",0),e.TgZ(6,"div",1),e.YNc(7,U,1,2,"app-recipe-item",3),e.qZA(),e.qZA()),2&i&&(e.xp6(7),e.Q6J("ngForOf",n.recipes))},directives:[d.sg,I],styles:[""]}),t})();const w=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA(),e.qZA())},directives:[x,s.lC],styles:["p[_ngcontent-%COMP%]{border-color:#8b0000;border:1px;color:#f0f8ff;background-color:#b45f5f;margin:20px;padding:10px}"]}),t})(),canActivate:[R],children:[{path:"",component:b},{path:"new",component:g},{path:":id",component:C,resolve:[Z]},{path:":id/edit",component:g,resolve:[Z]}]}];let N=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(w)],s.Bz]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz,o.UX,N,h.m]]}),t})()}}]);