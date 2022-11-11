import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ISoicalMedia } from 'src/app/shared/interfaces/socialMedia.interface';
import { SocialsService } from 'src/app/shared/services/socials.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videos: string[] = ['2.mov', '3.mov'];
  socials: ISoicalMedia[] = [];
  constructor(
    config: NgbCarouselConfig,
    socialMediaService: SocialsService
  ) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = true;
    config.animation = true;
    this.socials = socialMediaService.getSocialMedia();
  }

  ngOnInit(): void {}
}
