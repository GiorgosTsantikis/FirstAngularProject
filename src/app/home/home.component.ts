import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter By City">
        <button class="primary" type="button">Search</button>
</form>
    </section>
    <section class="results">
      <app-housing-location/>
</section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}