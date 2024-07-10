import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './component/book-list/book-list.component';
import { Book } from './model/book.model';
import { PotterService } from './service/potter.service';
import { BookFormComponent } from "./component/book-form/book-form.component";
import { BaseComponent } from './core/base.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, BookListComponent, BookFormComponent]
})
export class AppComponent extends BaseComponent implements OnInit {
    booksSig: WritableSignal<Book[]> = signal<Book[]>([]);

    constructor(private potterService: PotterService) {
      super();
    }

    ngOnInit(): void {
      this.fetchData();
    }

    protected fetchData(): void {
      const sub: Subscription = this.potterService.getEnglishBooks().subscribe({
            next: (books: Book[]) => this.booksSig.set(books),
            error: e => console.error(e)
          });
      this.addSubscription(sub);
    }
}
