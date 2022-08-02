import { ActivateGuard } from './activate.guard';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const Approutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ActivateGuard],
  },
];
