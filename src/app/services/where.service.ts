import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Where } from '../models/where.model';

@Injectable({
  providedIn: 'root',
})
export class whereService {
  private _whereDB = 'assets/json/where.json';
  where$!: Observable<Where[]>;

  constructor(private http: HttpClient) {}

  loadWhere(): Observable<Where[]> {
    return this.http.get<Where[]>(this._whereDB);
  }
}
