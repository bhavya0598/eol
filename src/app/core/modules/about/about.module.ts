import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutHomeComponent } from './components/about-home/about-home.component';
import { TherapeuticContextComponent } from './components/therapeutic-context/therapeutic-context.component';
import { TherapistComponent } from './components/therapist/therapist.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { SharedModule } from 'shared.module';

@NgModule({
  declarations: [
    AboutHomeComponent,
    TherapeuticContextComponent,
    TherapistComponent,
    PhilosophyComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
