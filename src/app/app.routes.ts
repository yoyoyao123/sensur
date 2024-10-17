import { Routes } from '@angular/router';
import {NosserviceComponent} from './nosservice/nosservice.component'
import { AcceuilComponent } from './acceuil/acceuil.component';
 

export const routes: Routes = [

    { path: '', component: AcceuilComponent },

    {path:'NosService',
    component: NosserviceComponent
    },
    {path:'acceuil',
        component: AcceuilComponent
        }
];
