import { Injectable } from '@angular/core';
import { ISoicalMedia } from '../interfaces/socialMedia.interface';

@Injectable({
  providedIn: 'root',
})
export class SocialsService {
  private socialMedia: ISoicalMedia[] = [
    {
      alt: 'Facebook',
      link: 'https://www.facebook.com/earthoflight/',
      src: 'fb icon.svg',
      defaultLink: 'fb icon.svg',
      hoverLink: 'fb icon hover.svg',
    },
    {
      alt: 'Instagram',
      link: 'https://www.instagram.com/earth.of.light/?hl=en',
      src: 'IG icon.svg',
      defaultLink: 'IG icon.svg',
      hoverLink: 'IG icon hover.svg',
    },
    {
      alt: 'Twitter',
      link: 'https://twitter.com/EARTHofLT',
      src: 'Twitter icon.svg',
      defaultLink: 'Twitter icon.svg',
      hoverLink: 'Twitter icon hover.svg',
    },
    {
      alt: 'Linkedin',
      link: 'https://www.linkedin.com/company/10024626/admin/',
      src: 'Linkedin icon.svg',
      defaultLink: 'Linkedin icon.svg',
      hoverLink: 'Linkedin icon hover.svg',
    },
    {
      alt: 'Pinterest',
      link: 'https://www.pinterest.ca/justinclaudedum/',
      src: 'Pinterest icon.svg',
      defaultLink: 'Pinterest icon.svg',
      hoverLink: 'Pinterest icon hover.svg',
    },
  ];

  constructor() {}

  getSocialMedia(): ISoicalMedia[] {
    return this.socialMedia;
  }
}
