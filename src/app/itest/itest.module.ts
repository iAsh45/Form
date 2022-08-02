import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IformComponent } from '../t-components/iform/iform.component';
import { ItestRoutingModule } from './itest-routing.module';

@NgModule({
  declarations: [IformComponent],
  imports: [CommonModule, ItestRoutingModule],
})
export class ItestModule implements OnInit {
  constructor() {
    console.log('i-test-loaded');
  }
  ngOnInit(): void {}
}
