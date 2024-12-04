import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import HousingLocationData from '@models/housing-location-data.model';
import { catchError, Observable,throwError } from 'rxjs';
import ApplicationData from '@models/application-data.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
 data:HousingLocationData[]=[];
  url="http://localhost:8080/listings";
  
  
  constructor(private http:HttpClient,private router:Router) {
   }

 

  getAllHousingLocations():Observable<HousingLocationData[]>{
    return this.http.get<HousingLocationData[]>(this.url)

  }

  getHousingLocatinById(id:number):Observable<HousingLocationData>{
    return this.http.get<HousingLocationData>(this.url+`/${id}`);
  }

  createListing(listing:HousingLocationData){
    console.log(listing," SERVICE");
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'}),
      responseType:'text' as 'text'};
    this.http.post(this.url,listing,httpOptions)
      .pipe(catchError((err)=>{
          console.log(err);
          return throwError(()=>err);
      }))
      .subscribe({
        next:(res)=>{
          console.log('Successfully updated ',listing.id);
          this.router.navigate([''])

        },
      error:(err)=>console.error("Delete failed ",err)}
      );
    
    
  }

  updateListing(listing:HousingLocationData){
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'}),
      responseType:'text' as 'text'};
    this.http.put(this.url,listing,httpOptions)
      .pipe(catchError((err)=>{
          console.log(err);
          return throwError(()=>err);
      }))
      .subscribe({
        next:(res)=>{
          console.log('Successfully updated ',listing.id);
          this.router.navigate([''])

        },
      error:(err)=>console.error("Put failed ",err)}
      );
  }


  deleteListing(id:number):void{
    this.http.delete(this.url.concat('/'+id),{responseType:'text'})
      .pipe(catchError((err)=>{
          console.log(err);
          return throwError(()=>err);
      }))
      .subscribe({
        next:(res)=>{
          console.log('Successfully deleted ',id);
          this.router.navigate([''])

        },
      error:(err)=>console.error("Delete failed ",err)}
      );
  }

  /*
  async getHousingLocationById(id:Number):Promise<HousingLocationData | undefined>{

    let ret:HousingLocationData|undefined;  
    await this.getAllHousingLocations().subscribe((data:HousingLocationData[])=>{
          ret= data.find(x=>x.id===id);
      })
      console.log(ret," retttt\n");
      

      return ret;
  }
      */
 

  

  submitApplication(application:ApplicationData):void{
    console.log(application);
  }

  async callApi(){
    fetch(this.url).then(async (res)=>{
      console.log(await res.json());
      
      
    });
    
    
  }
}
