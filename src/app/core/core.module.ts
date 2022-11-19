import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class CoreModule {}
