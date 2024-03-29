import { Component, HostListener, OnInit } from '@angular/core';
import { LoadContentService } from 'src/app/shared/services/load-content.service';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  src: SafeUrl = '';
  imageLoaded: boolean = false;
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
    {
      alt: 'Linkedin',
      src: 'linkedin/linkedin.png',
      additionalText: 'earthoflight',
      link: 'https://www.linkedin.com/company/earth-of-light-therapeutic-network/',
    },
    {
      alt: 'Google Business',
      src: 'Google Business/Google Business.png',
      additionalText: 'earthoflight',
      link: 'https://www.google.com/maps/place/Earth+of+Light+Therapeutic+Services/@51.0916135,-115.3508799,17z/data=!3m1!4b1!4m5!3m4!1s0x53a023368d31d0ab:0x1ee1fe4e5b20b207!8m2!3d51.0916135!4d-115.3508799',
    },
    {
      alt: 'Messanger',
      src: 'Messanger/Messanger.png',
      additionalText: 'earthoflight',
      link: 'https://www.messenger.com/t/earthoflight',
    },
    {
      alt: 'Telegram',
      src: 'Telegram/Telegram.png',
      additionalText: 'earthoflight',
      link: 'https://telegram.me/earthoflight',
    },
  ];
  constructor(
    private loadContent: LoadContentService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.src = this.loadContent
      .getContent('assets/images/contact/', 'contact.jpg')
      .subscribe((data) => {
        this.src = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(data)
        );
        URL.revokeObjectURL(<string>this.src);
        if (this.src != '') this.imageLoaded = true;
      });
  }
}
