import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import {WikiService}        from './wikiService'
@Component({
  selector: 'wiki',
  providers: [JSONP_PROVIDERS, WikiService],
  template:
  `
  <h1>Wiki {{items}} </h1>
  <input #term (keyup)="search(term.value)" type="input" name="wiki" value="">
  <ul>
      <a *ngFor="let item of items | async" href = "https://en.wikipedia.org/wiki/{{replaceAll(item, ' ', '_')}}"><li >{{item}}</li></a>
  </ul>
  `
})

export class Wiki {
  //items: Observable<string[]>;

  /*  search(term: string) {
      this.items = this.wikiService.search(term);
      console.log(this.items);
    }*/
    replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

  constructor(private wikiService: WikiService) {};

  private searchTermStream = new Subject<string>();

  items: Observable<string[]> = this.searchTermStream
    .debounceTime(1)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wikiService.search(term));

    search(term: string) { this.searchTermStream.next(term); console.log(`ITEMS: ${this.items}`}

}
