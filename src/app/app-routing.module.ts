import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { GetFormComponent } from './components/get-form/get-form.component';
import { ShowFormComponent } from './components/show-form/show-form.component';

const routes: Routes = [
  {
    path: 'formData',
    component: ShowFormComponent,
  },
  {
    path: 'iform',
    component: GetFormComponent,
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test-form/test-form.module').then((m) => m.TestFormModule),
  },
  {
    path: 'itest',
    loadChildren: () =>
      import('./itest/itest.module').then((m) => m.ItestModule),
  },
];

const routerOption: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOption)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
