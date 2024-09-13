import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from "src/app/models/Book";
import { Observable } from 'rxjs';
import { Product2Service } from 'src/app/services/product2.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;
  books: Book[];
  books_p: Book[];
  product: Book;
  b: string;
  bk: string = "Helloooooooooooooooo";
  displayAllBooks: boolean = false;
  displayAddBookForm: boolean = false;
  displayPublishedBooks: boolean = false;

  constructor(private ps: Product2Service) { }

  ngOnInit(): void {
    // Placeholder for any initialization logic. The subscription to books can be enabled here.
    // Example:
    // this.ps.getAllProducts().subscribe((data: Book[]) => {
    //   this.books = data;
    // });
  }

  // Toggle display for all books
  abc(): void {
    console.log("Logged in: Get ALL Books");
    this.displayAllBooks = !this.displayAllBooks;

    // Fetch all books
    this.ps.getAllProducts().subscribe((data: Book[]) => {
      this.books = data;
    });

    // Example for setting bk to the rootURL
    this.bk = this.ps.rootURL;
  }

  // Toggle display for adding a new book
  addBookFlag(): void {
    this.displayAddBookForm = !this.displayAddBookForm;
  }

  // Toggle display for published books
  publishedBooksFlag(): void {
    this.displayPublishedBooks = !this.displayPublishedBooks;
  }

  // Add a new book
  addBook(t: HTMLInputElement, a: HTMLInputElement, p: HTMLInputElement): void {
    const newBook = {
      title: t.value,
      author: a.value,
      publisher: p.value
    };

    console.log(newBook);

    // Call the service to create a new book
    this.ps.createBook(newBook).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // Fetch and display all published books
  displayAllPublishedBooks(): void {
    console.log("Logged in");
    this.displayPublishedBooks = !this.displayPublishedBooks;

    // Fetch all published books
    this.ps.getAllPublishedBooks().subscribe(
      (data: Book[]) => {
        this.books_p = data;
        console.log(data);
      }
    );
  }
}
