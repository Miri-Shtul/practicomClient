import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {

  constructor(public personService: PersonService) { }
  isLogin: boolean;
  userName: string = "";
  ngOnInit(): void {
    if (this.personService.currentUser)
      this.userName = this.personService.currentUser.FirstName;
  }
  ngOnDestroy(): void {

  }
}
