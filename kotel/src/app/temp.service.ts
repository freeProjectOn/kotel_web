import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Temp } from './Temp';

@Injectable()
export class TempService {

  constructor(private http:Http) {
    console.log('Temp Service created.', http);

  }

  public getAll(): Promise<Temp[]> {
    /*// make the call
    return this.http.get('http://localhost:3000/getTempAvg')
    // initial transform - result to json
      .map(response => response.json())
    // next transform - each element in the
    // array to a Temp class instance
      .map((temps: Array<Temp>) => {
        let result:Array<any> = [];
        if (temps) {
          temps.forEach((temp) => {
            result.push(temp.den_spotreba);
          });
        }
        return result;
      })*/

    // make the call
    return this.http.get('http://localhost:3000/getTempAvg').toPromise().
    then(
      response => response.json()
    )
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
