import { Component } from '@angular/core';
import './rxjs'
import {DataService} from './data.service'
import {Wiki} from './wikiComponent'
@Component({
  selector: 'my-app',
  providers: [DataService],
  directives: [Wiki],
  styles: [`
    .selected1 {
      color: red;
      transition: 1s;
      font-smoothing: antialiased;
    }
    `
  ],
  template: `
  <h1 >My First Angular 2 App <span *ngIf = 'selected'>{{selected}}</span></h1>
  <input [(ngModel)]="newData" type="input" name="someThing" value="">
  <button (click)="getFuckinData()">Get Array</button>
  <button (click)="addFuckinData(); ">Add element in array</button>
  <ul><li *ngFor = "let item of arr" [class.selected1]="item === selected"> <span (click)="onSelect(item)">{{item}}</span> <span (click)="delData(item)" *ngIf = 'item === selected'>Remove</span> </li></ul>
  <br>

  <wiki></wiki>
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
  addFuckinData() {
    if (!this.newData) { return; }
    this.data.addData(this.newData).subscribe(
      data => this.arr = data);
    this.newData = '';
  }

  onSelect(item: number) {
    this.selected = item;
    console.log(item);
  }
  delData(item: number) {
    this.data.deleteData(item)
      .subscribe(data => this.arr = data);
    this.selected = undefined;
    console.log('removed!');
  }
}
