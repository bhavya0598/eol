import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCopied = false;
  currentUrl = '/home';
  constructor(public router: Router, public clipboard: Clipboard) {
    this.currentUrl = this.router.url;
  }
  ngOnInit(): void {}

  routeToHome(): void {
    this.router.navigate(['home']);
  }

  openSideMenu(): void {
    // pass currentUrl to sidenav to know the active state
  }

  // Todo: Copy whole url
  shareCurrentPageLink(): void {
    this.isCopied = this.clipboard.copy(this.currentUrl);
  }
}
