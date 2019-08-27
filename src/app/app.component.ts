import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  comments: any;
  size = 5;
  current = 0;
  total = 50;
  startFrom = 0;
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
  fullUrl: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.fullUrl = `${this.commentsUrl}?_start=${this.current*this.size}&_limit=${this.size}`
    return this.http.get(this.fullUrl)
      .subscribe(
        (data: {user, id, title, body}[]) => {
          this.comments = data;
        }
      );
  }

  onPageChanged($event) {
    this.current = $event;
    this.getData();
  }
}
