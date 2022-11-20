import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EolServicesRoutingModule } from './eol-services-routing.module';
import { SharedModule } from 'shared.module';
import { EolServicesHomeComponent } from './components/eol-services-home/eol-services-home.component';
import { EolServicesRelationshipProblemsComponent } from './components/eol-services-relationship-problems/eol-services-relationship-problems.component';


@NgModule({
  declarations: [
    EolServicesHomeComponent,
    EolServicesRelationshipProblemsComponent
  ],
  imports: [
    CommonModule,
    EolServicesRoutingModule,
    SharedModule
  ]
})
export class EolServicesModule { }
