import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }              from 'rxjs/Observable';

@Injectable()
export class DataService {
  private dataUrl: string = '/getData';
  private delUrl: string = '/deleteData'
  constructor(private http: Http) { };
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getData(): Observable<Response> {
    return this.http.get(this.dataUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  addData(adding: number): Observable<Response> {
    let body = { name: adding };
    return this.http.post(this.dataUrl, body)
      .map(this.extractData);
  }
  deleteData(rm): Observable<Response> {
    let item = { name: rm };
    return this.http.post(this.delUrl, item)
      .map(this.extractData);
  }
}
