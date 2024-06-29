import { Component, Input, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.sass'
})
export class BookFormComponent {

  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  @Input({required: true}) booksSig!: WritableSignal<Book[]>;

  onSubmit() {
    const newBook: Book = {
      title: this.bookForm.value.title ?? '',
      number: 0,
      originalTitle: '',
      releaseDate: new Date(),
      description: '',
      pages: 0,
      cover: '',
      index: this.booksSig()[this.booksSig().length-1].index+1
    }
    this.booksSig.set([...this.booksSig(), newBook]);
  }
}
