import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistaComponent } from './artista/artista.component';

export const ROUTES: Routes = [

    { path : 'home', component: HomeComponent },
    { path : 'search', component: SearchComponent },
    { path : 'artista/:id', component: ArtistaComponent},
    { path : '' , pathMatch: 'full', redirectTo: 'home'},
    { path : '**' , pathMatch: 'full', redirectTo: 'home'}


];

