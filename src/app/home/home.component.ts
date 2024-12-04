import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import HousingLocationData from '@models/housing-location-data.model';
import { HousingService } from 'app/housing.service';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocationComponent,FormsModule],

  template: `
    <section>
        <input type="text" id="city" [(ngModel)]="city" 
        (ngModelChange)="onCityChange()"placeholder="Filter By City">

        <button class="create-listing-btn" enable="true" (click)="createListing()" >Add Listing</button>
    </section>
    <section class="results">
      <app-housing-location 
      *ngFor="let location of filteredList"
      [housingLocation]="location" ></app-housing-location>
</section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingService:HousingService=inject(HousingService);
  houseList:HousingLocationData[]=[];
  filteredList:HousingLocationData[]=[];
  city:string='';

  ngOnInit():void{
    this.housingService.getAllHousingLocations().subscribe(
      (data:HousingLocationData[])=>{
        this.houseList=data;
        console.log(data);
        this.filteredList=[...this.houseList];
      })
    
  }
  constructor(private router:Router){
   
  }

  onCityChange(){
    this.filteredList=
    this.houseList.filter(x=>x.city.toLowerCase().includes(this.city.toLowerCase().trim()));
    console.log(this.filteredList," ",this.city);
    
  }

  createListing(){
    this.router.navigate(['newlisting']);
  }

  

}
