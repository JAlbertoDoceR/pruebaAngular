import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { HomeComponent } from './components/home/home'; 

export const routes: Routes = [
  { path: '', component: LoginComponent },      // Ruta inicial Login
  { path: 'home', component: HomeComponent },  
];