import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationDetailsComponent } from './housing-location-details/housing-location-details.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { EditListingFormComponent } from './edit-listing-form/edit-listing-form.component';
const routeConfig:Routes=[
    {path:'',component:HomeComponent},
    {path:'listing/:id',component:HousingLocationDetailsComponent},
    {path:'apply/:id',component:ApplyFormComponent},
    {path:'newlisting',component:EditListingFormComponent}
];

export default routeConfig;

