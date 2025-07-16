import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'hello', component: HelloComponent },
    { path: '', component: HomeComponent }
];
