import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContattiComponent } from './components/contatti/contatti.component';

export const routes: Routes = [
    {
        path:"", component:HomeComponent
    },
    {
        path:"contatti", component:ContattiComponent    
    }
];
