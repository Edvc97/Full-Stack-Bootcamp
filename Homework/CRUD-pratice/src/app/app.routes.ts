import { Routes } from '@angular/router';
import { Create } from './create/create';
import { Read } from './read/read';
import { Update } from './update/update';

export const routes: Routes = [
    {path: 'create', component: Create},
    {path: 'read', component: Read},
    {path: 'update/:email', component: Update},
];
