import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import HousingLocationData from '@models/housing-location-data.model'; 
import { PricePipe } from 'app/pipes/price.pipe';
@Component({
  selector: 'app-housing-location',
  imports: [RouterModule,PricePipe],
  template: `
  <a [routerLink]="['listing/',housingLocation.id]" class="click-listing">
  <section class="listing"  >
      <img 
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <p class="listing-price">{{housingLocation.price | PricePipe}}</p>
    </section>
</a>
  `,
  styleUrls: ['./housing-location.component.css'],
   
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocationData;
}
