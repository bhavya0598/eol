import { Component, HostListener, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactImage = 'contact/contact.png';
  screenWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  contactDetails: IContact[] = [
    {
      alt: 'Email',
      src: 'email/email.png',
      additionalText: 'info@earthoflight.com',
      link: 'mailto:info@earthoflight.com',
    },
    {
      alt: 'Phone',
      src: 'Phone/Phone.png',
      additionalText: '(825) 333-6699',
      link: 'tel:+18253336699',
    },
    {
      alt: 'Map',
      src: 'map/map.png',
      additionalText: 'earthoflight',
      link: 'https://g.page/earthoflight?share',
    },
    {
      alt: 'Skype',
      src: 'skype/skype.png',
      additionalText: 'earthoflight',
      link: 'skype:earthoflight?call',
    },
    {
      alt: 'WhatsApp',
      src: 'WhatsApp/WhatsApp.png',
      additionalText: '(780) 907-8899',
      link: 'https://api.whatsapp.com/send?phone=7809078899',
    },
    {
      alt: 'Zoom',
      src: 'Zoom/Zoom.png',
      additionalText: 'earthoflight',
      link: 'https://us02web.zoom.us/j/2108839738',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
