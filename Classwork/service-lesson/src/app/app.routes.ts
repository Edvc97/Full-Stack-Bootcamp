import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Add } from './add/add';
export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: Add,
    }

];
