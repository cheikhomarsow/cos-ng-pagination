import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: any;
  size: number;
  current: number;
  total = 200;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.current = 0;
    this.size = 10;
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos(this.current, this.size).subscribe(res => {
      this.todos = res;
    });
  }

  onPageChanged($event) {
    this.current = $event;
    this.loadTodos();
  }
}
