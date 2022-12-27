import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videos: { name: string; text: string }[] = [
    {
      name: '1.mp4',
      text: `Albeit the fact that I am love, one of the greatest ironies of life is that
              love is the greatest unknown. Thus, embodying love and embracing the unknown
              is the best, if not the only way to get to know me.`,
    },
    {
      name: '2.mp4',
      text: `Just as much as meditation is the original medicine, nature is the first physician.`,
    },
    {
      name: '3.mp4',
      text: `Truth is timeless and alchemical: It induces spontaneous transformation and triggers exponential growth whenever it is encountered.`,
    },
    {
      name: '4.mp4',
      text: `The greatest gift that one can give is the light of awareness.`,
    },
  ];
  constructor(config: NgbCarouselConfig) {
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
