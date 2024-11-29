import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent],
  template:
  
  `
  <main>
  <header class="brand-name">
  <img class="brand-logo" src="/app/logo.svg"/>
  </header>
  <section class="content">
    <app-home/>
  </section>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
