import { Component } from '@angular/core';
import './rxjs'
import {DataService} from './data.service'
@Component({
  selector: 'my-app',
  providers: [DataService],
  template: `
  <h1>My First Angular 2 App {{arr}}</h1>
  <input [(ngModel)]="newData" type="input" name="someThing" value="">
  <button (click)="getFuckinData()">Get Array</button>
  <button (click)="addFuckinData(); ">Add element in array</button>
  <ul><li *ngFor = "let item of arr">{{item}}</li><ul>
  `
})
export class AppComponent {
  constructor(private data: DataService) { };
  newData: number;
  resData: any;
  arr: Response<number> = [];

  getFuckinData() {
    this.arr = [];
    this.data.getData().subscribe(
      data => this.arr = data
    );
  }
  /*
  {for (let it of data) {
    this.arr.push(it);
    console.log(data);
  }}
  */

  addFuckinData() {
    if (!this.newData ) {return;}
    this.data.addData(this.newData).subscribe(
    data => this.arr = data);
    this.newData = '';
  }
}
