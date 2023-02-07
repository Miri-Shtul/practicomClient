import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Child } from '../models/child';
import { EGender1, EHmo, Person } from '../models/person';
import { ChildService } from '../services/child.service';
import { PersonService } from '../services/person.service';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentUser = this.personServices.currentUser;
  isAddCild: boolean = false;
  children: Child[] = [];
  currentChild = new Child(this.personServices.currentUser.Id, "", "", new Date());
  constructor(public personServices: PersonService, public childService: ChildService) { }
  save(form) {

    this.personServices.currentUser.HMO = Number(this.personServices.currentUser.HMO);
    this.personServices.addNewUser(this.personServices.currentUser);
    for (let i = 0; i < this.children.length; i++) {
      this.childService.addNewChild(this.children[i]);


    }

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('My Sheet');
    worksheet.addRow(['ID', 'FirstName', 'LastName', 'Birthday', 'Gender', 'HMO', 'Child Name', 'Child ID', 'Child Birthday'])
    worksheet.addRow([this.personServices.currentUser.Id, this.personServices.currentUser.FirstName, this.personServices.currentUser.LastName, this.personServices.currentUser.BirthDay, this.personServices.currentUser.Gender, this.personServices.currentUser.HMO, '', '', '']);
    this.children.forEach((child) => {
      worksheet.addRow(['', '', '', '', '', '', child.Name, child.Id, child.BirthDay]);
    });
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'data.xlsx');
    });
  }
  getHmoValues() {
    return Object.keys(EHmo).filter(k => typeof EHmo[k] === "string");
  }
  getGenderValues() {
    return Object.keys(EGender1).filter(g => typeof EGender1[g] === "string")
  }
  addCild() {
    this.isAddCild = true;
  }
  addNewChild(form) {

    this.children.push(this.currentChild);

    this.currentChild = new Child(this.personServices.currentUser.Id, "", "", new Date());

    this.isAddCild = false;
  }

  ngOnInit(): void {
    this.currentUser = this.personServices.currentUser;

  }

}
// import { Workbook, WorkbookType } from 'exceljs';

// const workbook = new Workbook();
// const worksheet = workbook.addWorksheet('My Sheet');

// // Add data to the worksheet
// worksheet.addRow(['Name', 'Age']);
// worksheet.addRow(['John Doe', 30]);

// // Generate the file and initiate download
// workbook.xlsx.writeBuffer().then((data) => {
//   const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//   saveAs(blob, 'data.xlsx');
// });
