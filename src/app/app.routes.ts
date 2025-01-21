import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        title: 'Agency website template',
        loadComponent: () => import('./layout/landingpage/landingpage.component')
    }
];
