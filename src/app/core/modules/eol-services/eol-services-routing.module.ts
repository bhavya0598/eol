import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EolServicesHomeComponent } from './components/eol-services-home/eol-services-home.component';
import { EolServicesRelationshipProblemsComponent } from './components/eol-services-relationship-problems/eol-services-relationship-problems.component';

const routes: Routes = [
  {
    path: '',
    component: EolServicesHomeComponent,
  },
  {
    path: 'relationship-problems',
    component: EolServicesRelationshipProblemsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EolServicesRoutingModule {}
