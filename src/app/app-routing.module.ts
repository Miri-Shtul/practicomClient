import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"guidelines",component:GuidelinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
