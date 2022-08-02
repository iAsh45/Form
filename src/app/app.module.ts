import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalComponent } from './components/normal/normal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { Approutes } from './Routing';
import { RouterModule } from '@angular/router';
import { GetFormComponent } from './components/get-form/get-form.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
    AdminComponent,
    GetFormComponent,
    ShowFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //TestFormModule,
    // ItestModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(Approutes),
  ],
  providers: [ActivateGuard, UserService],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor() {
    console.log('app-loaded');
  }
  ngOnInit(): void {}
}
