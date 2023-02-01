import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServices {
  recipeArr:Observable<Recipe[]>=this.httpClient.get<Recipe[]>(`${environment.baseUrl}recipe/GetAllRecipes`)

  constructor(private httpClient: HttpClient) {
    console.log(this.recipeArr)
  }
  
}
