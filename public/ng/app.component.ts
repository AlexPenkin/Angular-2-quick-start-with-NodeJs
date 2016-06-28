import { Component } from '@angular/core';
import './rxjs'
import {DataService} from './data.service'
@Component({
    selector: 'my-app' ,
    providers: [DataService],
    template: `
  <h1>My First Angular 2 App {{resData}}</h1>
  <input type="input" name="someThing" value="">
  <button (click)="getFuckinData()">XHR Query</button>
  `
})
export class AppComponent {
    constructor  ( private data: DataService) {};
    resData: any;
    getFuckinData () {
      this.data.getData().subscribe(
        data => this.resData = data)
        }
    }
