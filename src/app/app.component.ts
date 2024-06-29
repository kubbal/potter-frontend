import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './component/book-list/book-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, BookListComponent]
})
export class AppComponent {}
