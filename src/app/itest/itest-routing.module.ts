import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IformComponent } from '../t-components/iform/iform.component';

const routes: Routes = [
  {
    path: 'Iform',
    component: IformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItestRoutingModule {}
