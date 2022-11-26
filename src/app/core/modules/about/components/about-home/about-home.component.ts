import { Component, HostListener, OnInit } from '@angular/core';
import { IAbout } from 'src/app/shared/interfaces/about.interface';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss'],
})
export class AboutHomeComponent implements OnInit {
  aboutImage = 'about/about.png';
  screenWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  aboutDetails: IAbout[] = [
    {
      src: 'therapeutic context.svg',
      alt: 'Therapeutic Context',
      route: '/about/therapeutic-context',
    },
    {
      src: 'therapist.svg',
      alt: 'Therapist',
      route: '/about/therapist',
    },
    {
      src: 'philosophy.svg',
      alt: 'Philosophy',
      route: '/about/philosophy',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
