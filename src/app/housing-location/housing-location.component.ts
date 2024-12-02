import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import HousingLocationData from '@models/housing-location-data.model'; 
@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  template: `
  <a routerLink={{housingLocation.id}}>
  <section class="listing"  >
      <img 
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
</a>
  `,
  styleUrls: ['./housing-location.component.css'],
   
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocationData;
}
