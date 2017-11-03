import { Injectable } from '@angular/core';

import { Headers, Http, Response  } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GetuserlistService {

  constructor(private http: Http) { }

  getUser() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
    .map((res:Response) => res.json());

  }
}
