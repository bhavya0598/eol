import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NotFoundComponent,
    InternalServerErrorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbTooltipModule,
  ],
  exports: [
    NotFoundComponent,
    InternalServerErrorComponent,
    HeaderComponent,
    NgbTooltipModule,
  ]
})
export class SharedModule { }
