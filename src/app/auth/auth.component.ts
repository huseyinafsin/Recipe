import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true
  isLoading = false
  error :string= null;
  @ViewChild(PlaceholderDirective,{static:false}) alertHost :PlaceholderDirective

  private closeSub:Subscription
  constructor(private authService: AuthService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form:NgForm){

    if (!form.valid) {
      return;
    }
    const email =form.value.email
    const password = form.value.password

    let authObs :Observable<AuthResponseData>;

    this.isLoading = true
    if (this.isLoginMode) {
     authObs =  this.authService.login(email,password);

    }else{
       authObs = this.authService.signUp(email, password)
    }

    authObs.subscribe(resData=>{
      console.log(resData);
      this.isLoading= false
      this.router.navigate(['/recipes'])
    }, errorMessage=>{
      console.log("Error:"+errorMessage)
      this.error = errorMessage
      this.showErrorAlert(errorMessage);
      this.isLoading =false
    });

    form.reset()

  }
  onHandleError(){
    this.error = null
  }
  ngOnDestroy(): void {
   if (this.closeSub) {
     this.closeSub.unsubscribe();

   }
  }

  private showErrorAlert(message:string){
    //const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef =this.alertHost.viewContainerRef;
    hostViewContainerRef.clear()

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory)

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe()
      hostViewContainerRef.clear()
    })
  }

}
