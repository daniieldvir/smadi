import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MyBelieve } from '../models/myBelieve.model';

@Injectable({
  providedIn: 'root',
})
export class believeService {
  private _myBelieveDB = 'assets/json/myBelieve.json';
  myBelieve$!: Observable<MyBelieve[]>;

  constructor(private http: HttpClient) {}

  loadBelieves(): Observable<MyBelieve[]> {
    return this.http.get<MyBelieve[]>(this._myBelieveDB);
  }
}
