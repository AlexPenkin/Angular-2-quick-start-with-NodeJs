import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }              from 'rxjs/Observable';

@Injectable()
export class DataService {
    private dataUrl: string = '/getData';
    constructor(private http: Http) { };
    private extractData(res: Response) {
        let body = res._body;
        return body || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
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
}
