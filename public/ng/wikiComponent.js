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
var http_1 = require('@angular/http');
var Subject_1 = require('rxjs/Subject');
var wikiService_1 = require('./wikiService');
var Wiki = (function () {
    function Wiki(wikiService) {
        var _this = this;
        this.wikiService = wikiService;
        this.searchTermStream = new Subject_1.Subject();
        this.items = this.searchTermStream
            .debounceTime(1)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.wikiService.search(term); });
    }
    //items: Observable<string[]>;
    /*  search(term: string) {
        this.items = this.wikiService.search(term);
        console.log(this.items);
      }*/
    Wiki.prototype.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    ;
    Wiki.prototype.search = function (term) { this.searchTermStream.next(term); console.log("ITEMS: " + this.items); };
    Wiki = __decorate([
        core_1.Component({
            selector: 'wiki',
            providers: [http_1.JSONP_PROVIDERS, wikiService_1.WikiService],
            template: "\n  <h1>Wiki {{items}} </h1>\n  <input #term (keyup)=\"search(term.value)\" type=\"input\" name=\"wiki\" value=\"\">\n  <ul>\n      <a *ngFor=\"let item of items | async\" href = \"https://en.wikipedia.org/wiki/{{replaceAll(item, ' ', '_')}}\"><li >{{item}}</li></a>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [wikiService_1.WikiService])
    ], Wiki);
    return Wiki;
}());
exports.Wiki = Wiki;
//# sourceMappingURL=wikiComponent.js.map