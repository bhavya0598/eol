import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './src/app/shared/shared-routing.module';
import { NotFoundComponent } from './src/app/shared/components/not-found/not-found.component';
import { InternalServerErrorComponent } from './src/app/shared/components/internal-server-error/internal-server-error.component';
import { HeaderComponent } from './src/app/shared/components/header/header.component';
import {
  NgbTooltipModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SocialComponent } from './src/app/shared/components/social/social.component';
import { BreadcrumbComponent } from './src/app/shared/components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    InternalServerErrorComponent,
    HeaderComponent,
    SocialComponent,
    BreadcrumbComponent,
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
    BreadcrumbComponent,
  ],
})
export class SharedModule {}
