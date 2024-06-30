import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ApiConstants } from '../constants/api.constants';
import { Observable, map } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class PotterService {

  constructor(private http: HttpClient) { }

  getEnglishBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.potterApiBaseUrl+ApiConstants.GET_EN_BOOKS).pipe(
      map(books => books.map(book => ({...book, releaseDate: new Date(book.releaseDate)})))
    );
  }
}
