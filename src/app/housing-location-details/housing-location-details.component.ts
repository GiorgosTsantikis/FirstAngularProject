import { ChangeDetectorRef, Component,inject } from '@angular/core';
import HousingLocationData from '@models/housing-location-data.model';
import { HousingService } from 'app/housing.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router ,RouterModule,Routes} from '@angular/router';
import { countryCodeValidator } from 'app/validators/country-code.directive';
import { ApplyFormComponent } from "../apply-form/apply-form.component";
import ApplicationData from '@models/application-data.model';
import { EditListingFormComponent } from "../edit-listing-form/edit-listing-form.component";
import { PricePipe } from 'app/pipes/price.pipe';
@Component({
  selector: 'app-housing-location-details',
  imports: [PricePipe,CommonModule, ReactiveFormsModule, ApplyFormComponent, EditListingFormComponent],
  templateUrl:'./housing-location-details.component.html',
  styleUrl: './housing-location-details.component.css'
})


export class HousingLocationDetailsComponent {

  route:ActivatedRoute=inject(ActivatedRoute);
  housingService=inject(HousingService);
  housingLocation:HousingLocationData|undefined;
  applicationSent:boolean=false;
  applyForm:FormGroup;
  data:ApplicationData={firstName:'',lastName:'',email:'',phoneNum:''};
  housingLocationId:number;
  editing=false;
  apply=false;
  constructor(private fb:FormBuilder,private router:Router){
    this.housingLocationId=Number(this.route.snapshot.params['id']);
    console.log(this.housingLocationId);
    this.applyForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phoneNum:['',[Validators.required,countryCodeValidator()]]
    });
  }
    
     ngOnInit(){

      this.housingService.getHousingLocatinById(this.housingLocationId).subscribe(
        (data:HousingLocationData)=>{
          this.housingLocation=data;
        }
      )
      /*
      this.housingService.getAllHousingLocations().subscribe(
        (data:HousingLocationData[])=>{
          this.housingLocation=data.find(x=>x.id===this.housingLocationId);
        }) 
      */

  }

  reset(){
    this.applicationSent=false;
  }

  clickApply(){
    //console.log("apply");
    //this.router.navigate(['/apply',this.housingLocationId]);
    this.apply=!this.apply;
  }

  receiveApplication(application:ApplicationData){
    console.log("received ",application);
    this.applicationSent=true;
    this.data={...application};
  }

  updateListing(formData:any){
    console.log("BEFORE ",this.housingLocation);
    if(this.housingLocation)
      this.housingLocation = {
        ...this.housingLocation, // Keep existing properties
        name: formData.name ?? this.housingLocation.name,
        city: formData.city ?? this.housingLocation.city,
        state: formData.state ?? this.housingLocation.state,
        price: formData.price ?? this.housingLocation.price,
        availableUnits: formData.availableUnits ?? this.housingLocation.availableUnits,
        rooms: formData.rooms ?? this.housingLocation.rooms,
        wifi: formData.wifi ?? this.housingLocation.wifi,
        laundry: formData.laundry ?? this.housingLocation.laundry
      };
    console.log("AFTER",this.housingLocation);
    if(this.housingLocation!==undefined)
      this.housingService.updateListing(this.housingLocation);
    
  }

  deleteListing(){
    this.housingService.deleteListing(this.housingLocationId);
  }

  editListing(){
    if(this.housingLocation){
      this.editing=true;
      console.log(this.housingLocation);
    }
  }

    onSubmit(){
      if(this.applyForm.valid){
        this.housingService.submitApplication({
          firstName:this.applyForm.value.firstName??'',
          lastName:this.applyForm.value.lastName??'',
          email:this.applyForm.value.email??'',
          phoneNum:this.applyForm.value.phoneNum??''
       } );
      }else{
        console.log("invalid");
        
      }
    }

    

}
