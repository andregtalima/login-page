import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginLayoutComponent } from './components/default/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, LoginComponent],
})
export class AppComponent {
  title = 'login-page';
}
