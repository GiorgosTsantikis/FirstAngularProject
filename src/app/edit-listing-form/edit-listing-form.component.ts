import { CommonModule } from '@angular/common';
import { Component, Input,Output,EventEmitter,OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import HousingLocationData from '@models/housing-location-data.model';
import { HousingService } from 'app/housing.service';

@Component({
  selector: 'app-edit-listing-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-listing-form.component.html',
  styleUrl: './edit-listing-form.component.css'
})
export class EditListingFormComponent {
  @Input() listing:HousingLocationData|undefined;
  @Output() listingUpdate=new EventEmitter<HousingLocationData>();
  editListingForm:FormGroup;
  housingService:HousingService=inject(HousingService);

  constructor(private fb:FormBuilder){
    console.log(this.listing);
    this.editListingForm=this.fb.group({
      name: '',
      city: '',
      state: '',
      wifi: false,
      laundry: false,
      availableUnits: '',
      price: '',
      rooms: ''
    })
    
  }

  ngOnInit(){
    this.editListingForm=this.fb.group({
      name:this.listing?.name,
      city:this.listing?.city,
      state:this.listing?.state,
      wifi:this.listing?.wifi,
      laundry:this.listing?.laundry,
      availableUnits:this.listing?.availableUnits,
      price:this.listing?.price,
      rooms:this.listing?.rooms
    })
  }

  sanitizeFormValues(formValues: any): HousingLocationData {
    return {
      id:0,
      name: formValues.name || 'Unnamed Location',
      city: formValues.city || 'Unknown City',
      state: formValues.state || 'Unknown State',
      wifi: formValues.wifi || false,
      laundry: formValues.laundry || false,
      availableUnits: formValues.availableUnits || 0,
      price: formValues.price || 0,
      rooms: formValues.rooms || 0,
      photo: 'assets/house.jpg',
    };
  }

  onSubmit(){
    console.log("submit edit");
    
    if(this.listing!==undefined){
      console.log("not undefined");
    this.listingUpdate.emit(this.editListingForm.value);
  }else{
    const newListing=this.sanitizeFormValues(this.editListingForm.value)
    this.housingService.createListing(newListing);
  }
}


}
