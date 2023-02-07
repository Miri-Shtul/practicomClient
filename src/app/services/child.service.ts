import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Child } from '../models/child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  routeUrl = `${environment.baseUrl}/Child`

  constructor(public httpClient: HttpClient) { }
  addNewChild(child: Child) {
    this.httpClient.post<Child>(`${this.routeUrl}`, child).subscribe(
      res => {
        console.log('Person added successfully');
      },
      error => {
        console.error('Error adding person', error);
      }
    );
  }
}
