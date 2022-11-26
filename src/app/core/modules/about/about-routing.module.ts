import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutHomeComponent } from './components/about-home/about-home.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { TherapeuticContextComponent } from './components/therapeutic-context/therapeutic-context.component';
import { TherapistComponent } from './components/therapist/therapist.component';

const routes: Routes = [
  {
    path: '',
    component: AboutHomeComponent,
  },
  {
    path: 'therapeutic-context',
    component: TherapeuticContextComponent,
    children: [],
  },
  {
    path: 'therapist',
    component: TherapistComponent,
    children: [],
  },
  {
    path: 'philosophy',
    component: PhilosophyComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
