import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  routeUrl = `${environment.baseUrl}/Person`
  currentUser: Person = new Person("", "", "", new Date(), 1, 1);
  constructor(public httpClient: HttpClient) { }
  // addNewUser(person: Person): Observable<Person> {
  //   return this.httpClient.post<Person>(`${this.routeUrl}`, person);
  // }

  addNewUser(person: Person) {
    return this.httpClient.post<Person>(`${this.routeUrl}`, person)
  }
  getByID(id: string) {
    return this.httpClient.get<Person>(`${this.routeUrl}/${id}`)
  }
}
