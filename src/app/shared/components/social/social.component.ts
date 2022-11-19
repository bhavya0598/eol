import { Component, OnInit } from '@angular/core';
import { ISoicalMedia } from '../../interfaces/socialMedia.interface';
import { SocialsService } from '../../services/socials.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  socials: ISoicalMedia[] = [];

  constructor(socialMediaService: SocialsService) {
    this.socials = socialMediaService.getSocialMedia();
  }

  ngOnInit(): void {}
}
