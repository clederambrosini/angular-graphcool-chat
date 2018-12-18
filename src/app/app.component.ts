import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private apiURL: 'https://api.graph.cool/simple/v1/cjprckuih3vsj0112x8k5zt59';

  constructor(
    private http: HttpClient
  ) {
    this.allUsers();
  }

  allUsers(): void {

    const body = {
      query: `
        query{
          allUsers {
            id
            name
            email
          }
        }
      `
    };

    this.http.post(this.apiURL, body)
        .subscribe(res => console.log('Query: ', res));
  }
}
