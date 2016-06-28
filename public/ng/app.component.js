"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('./rxjs');
var data_service_1 = require('./data.service');
var AppComponent = (function () {
    function AppComponent(data) {
        this.data = data;
        this.arr = [];
    }
    ;
    AppComponent.prototype.getFuckinData = function () {
        var _this = this;
        this.arr = [];
        this.data.getData().subscribe(function (data) { return _this.arr = data; });
    };
    /*
    {for (let it of data) {
      this.arr.push(it);
      console.log(data);
    }}
    */
    AppComponent.prototype.addFuckinData = function () {
        var _this = this;
        if (!this.newData) {
            return;
        }
        this.data.addData(this.newData).subscribe(function (data) { return _this.arr = data; });
        this.newData = '';
    };
    AppComponent.prototype.onSelect = function (item) {
        this.selected = item;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [data_service_1.DataService],
            styles: ["\n    .selected1 {\n      color: red;\n      font-size: 2em;\n    }\n    "
            ],
            template: "\n  <h1 >My First Angular 2 App {{selected * 100}}</h1>\n  <input [(ngModel)]=\"newData\" type=\"input\" name=\"someThing\" value=\"\">\n  <button (click)=\"getFuckinData()\">Get Array</button>\n  <button (click)=\"addFuckinData(); \">Add element in array</button>\n  <ul><li *ngFor = \"let item of arr\" [class.selected1]=\"item === selected\" (click)=\"onSelect(item)\" >{{item}} <span>x</span> </li><ul>\n  "
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map