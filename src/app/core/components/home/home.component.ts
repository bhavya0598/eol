import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videos: string[] = ['1.mp4', '2.mov', '3.mov', '4.mp4'];
  constructor(
    config: NgbCarouselConfig,
  ) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = true;
    config.animation = true;
  }

  ngOnInit(): void {}
}
