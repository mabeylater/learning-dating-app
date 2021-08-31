import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): any {
    const url = '';
    this.http.get('https://localhost:5001/api/users').subscribe(users => {
      this.users = users;
    }, err => {
      console.log(err);
    });
  }
}
