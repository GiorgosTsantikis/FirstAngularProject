import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import HousingLocationData from '@models/housing-location-data.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
 data:HousingLocationData[]=[];
  url="http://localhost:8080/listings";
  protected housingLocationList:HousingLocationData[]=[
    {id:1,name:"house",state:"state1",city:"Poli",photo:"assets/house.jpg",laundry:true,wifi:true,availableUnits:5
    },
    {id:2,name:"other house",state:"state1",city:"city",photo:"assets/house.jpg",laundry:true,wifi:true,availableUnits:5
    },
    {id:3,name:"a third house",state:"state1",city:"Poli",photo:"assets/house.jpg",laundry:true,wifi:true,availableUnits:5
    },
    {id:4,name:"and a house",state:"state1",city:"Katsavraxa",photo:"assets/house.jpg",laundry:true,wifi:true,availableUnits:5
    },
    {id:5,name:"house",state:"state1",city:"Athens",photo:"assets/house.jpg",laundry:true,wifi:true,availableUnits:5
    },
    {id:6,name:"other house",state:"state1",city:"Athens",photo:"assets/house.jpg",laundry:true,wifi:true,availableUnits:5
    },
    {id:7,name:"a third house",state:"state1",city:"Thessaloniki",photo:"assets/house.jpg",laundry:true,wifi:true,availableUnits:5
    },
    {id:8,name:"and a house",state:"state1",city:"Katerini",photo:"assets/house.jpg",laundry:true,wifi:true,availableUnits:5
    }
  ];
  constructor(private http:HttpClient) {
   }

 

  getAllHousingLocations():Observable<HousingLocationData[]>{
    return this.http.get<HousingLocationData[]>(this.url)

  }

  getHousingLocationById(id:Number):HousingLocationData | undefined{
    return this.housingLocationList.find(house=>house.id===id);
  }

  submitApplication(firstName:string,lastName:string,email:string):void{
    console.log(firstName,lastName,email);
    this.callApi();
  }

  async callApi(){
    fetch(this.url).then(async (res)=>{
      console.log(await res.json());
      
      
    });
    
    
  }
}
