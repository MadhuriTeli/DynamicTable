import { Book } from './interface/book.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL ='https://fakerapi.it/api/v1/books?_quantity=7'

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient,) { }


  getBooks() {
   
    return this.http.get<Book[]>(BASE_URL);
  }




}
