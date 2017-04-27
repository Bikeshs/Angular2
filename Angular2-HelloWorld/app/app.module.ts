import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { LoginComponent }   from './app.Logincomponent';
import { WelcomeComponent }   from './app.Welcomecomponent';
import { DefaultComponent }   from './app.DefaultComponent';

const appRoutes: Routes = [ 
  { path: 'Login', component: LoginComponent },
  { path: 'Welcome', component: WelcomeComponent },  
  {  path: 'Default',component:DefaultComponent},
];

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,LoginComponent,WelcomeComponent,DefaultComponent ],
  bootstrap:    [ AppComponent ],  

})

export class AppModule { }