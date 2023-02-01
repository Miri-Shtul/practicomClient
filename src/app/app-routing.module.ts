import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:'register/:name',component:RegisterComponent},
  {path:"allRecipes",component:AllRecipesComponent},
  {path:"addRecipe",component:AddRecipeComponent},
  {path:"",component:LoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
