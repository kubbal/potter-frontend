import { Component, EventEmitter, Input, Output, Signal, WritableSignal, computed } from '@angular/core';
import { Book } from '../../model/book.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [DatePipe],
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
