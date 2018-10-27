import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class AppComponent {
  title = 'Login Page';
}

interface User {
  email: string;
  password: string;
}
