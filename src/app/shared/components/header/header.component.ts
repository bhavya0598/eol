import { Component, HostListener, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ISideMenuItem } from '../../interfaces/sideMenuItem.interface';
import { SocialsService } from '../../services/socials.service';
import { ISoicalMedia } from '../../interfaces/socialMedia.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  screenWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  isCopied = false;
  menuOpened: boolean = false;
  currentUrl = '/home';
  sideMenuItems: ISideMenuItem[] = [];
  socials: ISoicalMedia[] = [];
  constructor(
    public router: Router,
    public clipboard: Clipboard,
    private offcanvasService: NgbOffcanvas,
    socialMediaService: SocialsService
  ) {
    this.currentUrl = this.router.url;
    this.setSideMenuItems();
    this.socials = socialMediaService.getSocialMedia();
  }

  ngOnInit(): void {}

  routeToHome(): void {
    this.router.navigate(['home']);
  }

  openSideMenu(content: TemplateRef<any>) {
    this.menuOpened = true;
    this.offcanvasService.open(content, {
      backdrop: false,
      panelClass: 'custom-sideMenu',
      
    });
    this.setActiveMenu();
  }

  shareCurrentPageLink(): void {
    this.isCopied = this.clipboard.copy(window.location.href);
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }

  setSideMenuItems() {
    this.sideMenuItems = [
      {
        srcImg: 'home.png',
        imageLink: 'home.png',
        name: 'Home',
        href: '/home',
        activeImgLink: 'Home.svg',
        hoverImgLink: 'Home Hover.svg',
        isActive: false,
      },
      {
        srcImg: 'about.png',
        imageLink: 'about.png',
        name: 'About',
        href: '/about',
        activeImgLink: 'About Me Onthispage.svg',
        hoverImgLink: 'About Me Hover.svg',
        isActive: false,
      },
      {
        srcImg: 'contact.png',
        imageLink: 'contact.png',
        name: 'Contact',
        href: '/contact',
        activeImgLink: 'Contact Onthispage.svg',
        hoverImgLink: 'Contact-1.svg',
        isActive: false,
      },
    ];
  }

  setActiveMenu() {
    var index = this.sideMenuItems.findIndex((item) =>
      this.currentUrl.includes(item.href)
    );
    this.sideMenuItems.forEach(
      (item, i) => (item.isActive = i != index ? false : true)
    );
  }
}
