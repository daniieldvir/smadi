import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Testimonials } from '../models/testimonials.models';

@Injectable({
  providedIn: 'root',
})
export class testimonialsService {
  private _testimonials_DB = 'assets/json/testimonials.json';
  testimonials$!: Observable<Testimonials[]>;
  constructor(private http: HttpClient) {}

  loadTestimonials(): Observable<Testimonials[]> {
    return this.http.get<Testimonials[]>(this._testimonials_DB);
  }
}
