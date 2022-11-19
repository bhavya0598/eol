import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { HeaderComponent } from './components/header/header.component';
import {
  NgbTooltipModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    InternalServerErrorComponent,
    HeaderComponent,
    SocialComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbTooltipModule,
    NgbCarouselModule,
  ],
  exports: [
    NotFoundComponent,
    InternalServerErrorComponent,
    HeaderComponent,
    SocialComponent,
    NgbTooltipModule,
    NgbCarouselModule,
  ],
})
export class SharedModule {}
