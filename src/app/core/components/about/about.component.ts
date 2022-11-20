import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutImages = ['about.png'];

  constructor(config: NgbCarouselConfig) {
    config.wrap = false;
    config.animation = false;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
  }

  ngOnInit(): void {}
}
