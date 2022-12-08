import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../../shared.module';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [HomeComponent, ContactComponent, BookComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule, NgOptimizedImage],
  exports: [],
})
export class CoreModule {}
