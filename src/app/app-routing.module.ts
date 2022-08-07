import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {RegistrationFormComponent} from "./auth/registration-form/registration-form.component";


const routes:Routes= [
  {path: '', component:AppComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegisterComponent},
  {path: 'registration-form-reactive', component:RegistrationFormComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export  class AppRoutingModule{

}
