import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SideMenuComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbTooltipModule
  ],
  exports: [
    SideMenuComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HeaderComponent,
    NgbTooltipModule
  ]
})
export class SharedModule { }
