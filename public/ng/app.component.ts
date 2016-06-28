import { Component } from '@angular/core';
import './rxjs'
import {DataService} from './data.service'
@Component({
  selector: 'my-app',
  providers: [DataService],
  styles: [`
    .selected1 {
      color: red;
      font-size: 2em;
    }
    `
    ],
  template: `
  <h1 >My First Angular 2 App {{selected * 100}}</h1>
  <input [(ngModel)]="newData" type="input" name="someThing" value="">
  <button (click)="getFuckinData()">Get Array</button>
  <button (click)="addFuckinData(); ">Add element in array</button>
  <ul><li *ngFor = "let item of arr" [class.selected1]="item === selected" (click)="onSelect(item)" >{{item}} <span>x</span> </li><ul>
  `
})
export class AppComponent {
  constructor(private data: DataService) { };
  newData: number;
  resData: any;
  arr: Array<number> = [];
  selected: number;
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

  onSelect(item: number) {
    this.selected = item;
    console.log(item);
  }
}
