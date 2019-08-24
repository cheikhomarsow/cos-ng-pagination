import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(currentPage, perPage) {
    return this.http.get<any>(`http://jsonplaceholder.typicode.com/todos?_start=${currentPage}&_limit=${perPage}`);
  }
}
