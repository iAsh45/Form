import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestFormRoutingModule } from './test-form-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    TestFormRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class TestFormModule implements OnInit {
  constructor() {
    console.log('test-loaded');
  }
  ngOnInit(): void {}
}
