import { Component, EventEmitter, Input, Output, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.sass'
})
export class BookListComponent {

    @Output() fetchDataEmitter: EventEmitter<never> = new EventEmitter<never>();

    emitFetchData() {
      this.fetchDataEmitter.emit();
    }

    @Input({required: true}) booksSig!: WritableSignal<Book[]>;
    booksCount: Signal<number> = computed(() => this.booksSig().length);

    deleteBook(index: number) {
      this.booksSig.set(this.booksSig().filter(b => b.index !== index));
    }

}
