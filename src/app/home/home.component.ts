import { BookServiceService } from './../shared/book-service.service';
import { Book } from './../shared/interface/book.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Observable<Book[]>;
  dynamicArray: Array<any> = []
  newDynamic: any = {};

  constructor(private bookService: BookServiceService) { }
  displayColumns: string[] = ['title', 'author', 'genre', 'published'];
  // dataSource = this.books;

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    // this.books = this.bookService.getBooks();
    this.bookService.getBooks().subscribe((res) => {
      this.books = res['data'];
    });
    console.log(this.books)
  }




  addFieldValue() {
    console.log(this.newDynamic);
    this.dynamicArray.push(this.newDynamic)
    this.newDynamic = {};
    console.log(this.dynamicArray);
  }

}
