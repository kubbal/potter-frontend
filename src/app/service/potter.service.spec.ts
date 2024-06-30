import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PotterService } from './potter.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiConstants } from '../constants/api.constants';
import { Book } from '../model/book.model';
import { environment } from '../../environments/environment.development';
import { ALL_BOOKS } from '../../test-data/all-books';

describe('PotterService', () => {
  let service: PotterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PotterService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PotterService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that none of the tests make any extra HTTP requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 8 books on get all books', fakeAsync(() => {
    let books: Book[] = [];
    service.getEnglishBooks().subscribe(data => books = data);
  
    const req = httpTestingController.expectOne(environment.potterApiBaseUrl+ApiConstants.GET_EN_BOOKS);
    expect(req.request.method).toBe('GET');
  
    req.flush(ALL_BOOKS);

    tick();
  
    expect(books.length).toBe(8);
    expect(books).toEqual(ALL_BOOKS);

    // Check types
    expect(typeof books[0].title).toBe('string');
    expect(typeof books[0].number).toBe('number');
    expect(typeof books[0].originalTitle).toBe('string');
    expect(typeof books[0].description).toBe('string');
    expect(typeof books[0].pages).toBe('number');
    expect(typeof books[0].cover).toBe('string');
    expect(typeof books[0].index).toBe('number');
    expect(books[0].releaseDate instanceof Date).toBe(true);
  }));
});
