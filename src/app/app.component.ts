import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,RouterModule],
  template:
  
  `
  <main>
  <header class="brand-name">
  <img class="brand-logo" src="assets/logo.svg" routerLink="/"/>
  </header>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
