import { Component, HostListener, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IContact } from 'src/app/shared/interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactImage = 'contact.png';
  screenWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  contactDetails: IContact[] = [
    { alt: 'Email', src: 'email/email.png' },
    { alt: 'Phone', src: 'Phone/Phone.png' },
    { alt: 'Map', src: 'map/map.png' },
    { alt: 'Skype', src: 'skype/skype.png' },
    { alt: 'WhatsApp', src: 'WhatsApp/WhatsApp.png' },
    { alt: 'Zoom', src: 'Zoom/Zoom.png' },
  ];
  constructor(config: NgbCarouselConfig) {
    config.wrap = false;
    config.animation = false;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
  }

  ngOnInit(): void {}
}
