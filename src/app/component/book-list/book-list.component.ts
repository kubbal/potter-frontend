import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Book } from '../../model/book.model';
import { PotterService } from '../../service/potter.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.sass'
})
export class BookListComponent implements OnInit {

    booksSig: WritableSignal<Book[]> = signal<Book[]>([]);
    booksCount: Signal<number> = computed(() => this.booksSig().length);

    constructor(private potterService: PotterService) {}

    ngOnInit(): void {
      this.potterService.getEnglishBooks().subscribe({
        next: books => this.booksSig.set(books),
        error: e => console.error(e)
      });
    }

    deleteBook(index: number) {
      this.booksSig.set(this.booksSig().filter(b => b.index !== index));
    }

}
