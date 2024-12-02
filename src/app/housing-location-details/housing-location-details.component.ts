import { Component,inject } from '@angular/core';
import HousingLocationData from '@models/housing-location-data.model';
import { HousingService } from 'app/housing.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-housing-location-details',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl:'./housing-location-details.component.html',
  styleUrl: './housing-location-details.component.css'
})


export class HousingLocationDetailsComponent {

  route:ActivatedRoute=inject(ActivatedRoute);
  housingService=inject(HousingService);
  housingLocation:HousingLocationData|undefined;
  applyForm:FormGroup;
  constructor(private fb:FormBuilder){
    const housingLocationId=Number(this.route.snapshot.params['id']);
    console.log(housingLocationId);
    this.housingLocation=this.housingService.getHousingLocationById(housingLocationId);
    this.applyForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]]
    });
  }
    //TODO tilephono stin forma + validation me REGEX 10 dig + country code 3 digits
    //TODO Forma allo component
    onSubmit(){
      if(this.applyForm.valid){
        this.housingService.submitApplication(
          this.applyForm.value.firstName??'',
          this.applyForm.value.lastName??'',
          this.applyForm.value.email??''
        );
      }else{
        console.log("invalid");
        
      }
    }
  

}
