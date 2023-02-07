import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
routeUrl=`${environment.baseUrl}/Person`
  currentUser:Person=new Person("","","",new Date(),1,1);
  constructor( public httpClient:HttpClient) { }
 addNewUser(person:Person){
  this.httpClient.post<Person>(`${this.routeUrl}`, person)
    .subscribe(
      res => {
        console.log('Person added successfully');
      },
      error => {
        console.error('Error adding person', error);
      }
    );
}
getu(){
  this.httpClient.get<Person[]>(`${this.routeUrl}`)
}
}
