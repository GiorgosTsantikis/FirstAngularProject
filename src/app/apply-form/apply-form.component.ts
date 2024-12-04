import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component,EventEmitter,inject, Output,Input } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'app/housing.service';
import { countryCodeValidator } from 'app/validators/country-code.directive';
import ApplicationData from '@models/application-data.model';

@Component({
  selector: 'app-apply-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.css'
})
export class ApplyFormComponent {
 @Output() formEvent=new EventEmitter<ApplicationData>();
 @Input() id!:string;
  route:ActivatedRoute=inject(ActivatedRoute);
  housingService=inject(HousingService);
  applyForm:FormGroup;
  inRoute:boolean=false;
  housingLocationId:number;
  constructor(private fb:FormBuilder,private router:Router){
    this.housingLocationId=Number(this.route.snapshot.params['id']);
    this.applyForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phoneNum:['',[Validators.required,countryCodeValidator()]]
    })
  }

  clickApply(){
    console.log("apply");
    this.inRoute=true;
    this.router.navigate(['/apply']);
    
  }
    onSubmit(){
      console.log("submit");
      
      if(this.applyForm.valid){
        if(this.inRoute){
          this.housingService.submitApplication(
            {
              firstName:this.applyForm.value.firstName??'',
              lastName:this.applyForm.value.lastName??'',
              email:this.applyForm.value.email??'',
              phoneNum:this.applyForm.value.phoneNum??''
              }
          )
        }
        
        this.formEvent.emit(
          {
            firstName:this.applyForm.value.firstName??'',
            lastName:this.applyForm.value.lastName??'',
            email:this.applyForm.value.email??'',
            phoneNum:this.applyForm.value.phoneNum??''
            }
        )
      }else{
        console.log("invalid");
        
      }
    }


}
