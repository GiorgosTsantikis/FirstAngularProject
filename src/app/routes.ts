import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationDetailsComponent } from './housing-location-details/housing-location-details.component';
const routeConfig:Routes=[
    {path:'',component:HomeComponent},
    {path:':id',component:HousingLocationDetailsComponent}
];
//TODO update route
//TODO price field 
//TODO create pipe 30 -> 30.0$
//TODO stin thesi tis formas button gia reroute sto neo form component kai na 3erei to 
//id tou listing (forma na stelnei data me output sto parent tipou data+form submitted)
export default routeConfig;