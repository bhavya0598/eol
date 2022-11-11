import { Injectable } from '@angular/core';
import { ISoicalMedia } from '../interfaces/socialMedia.interface';

@Injectable({
  providedIn: 'root',
})
export class SocialsService {
  private socialMedia: ISoicalMedia[] = [
    {alt: "Facebook", link: '', src: 'fb icon.svg'},
    {alt: "Instagram", link: '', src: 'IG icon.svg'},
    {alt: "Twitter", link: '', src: 'Twitter icon.svg'},
    {alt: "GooglePlus", link: '', src: 'G+ icon.svg'},
    {alt: "Linkedin", link: '', src: 'Linkedin icon.svg'},
    {alt: "Pinterest", link: '', src: 'Pinterest icon.svg'},
  ];

  constructor() {}

  getSocialMedia(): ISoicalMedia[] {
    return this.socialMedia;
  }
}
 
