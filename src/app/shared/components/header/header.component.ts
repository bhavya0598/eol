import { Component, HostListener, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ISideMenuItem } from '../../interfaces/sideMenuItem.interface';

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
  currentUrl = '/home';
  sideMenuItems: ISideMenuItem[] = [];
  constructor(
    public router: Router,
    public clipboard: Clipboard,
    private offcanvasService: NgbOffcanvas
  ) {
    this.currentUrl = this.router.url;
    this.setSideMenuItems();
  }

  ngOnInit(): void {}

  routeToHome(): void {
    this.router.navigate(['home']);
  }

  openNoBackdrop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      backdrop: false, panelClass: 'sideMenu',
    });
    this.setActiveMenu();
  }

  // Todo: Copy whole url
  shareCurrentPageLink(): void {
    this.isCopied = this.clipboard.copy(this.currentUrl);
  }

  setSideMenuItems() {
    this.sideMenuItems = [
      {
        srcImg: 'Home-1.svg',
        imageLink: 'Home-1.svg',
        name: 'Home',
        href: '/home',
        activeImgLink: 'Home.svg',
        hoverImgLink: 'Home Hover.svg',
        isActive: false,
      },
      {
        srcImg: 'About Me.svg',
        imageLink: 'About Me.svg',
        name: 'About',
        href: '/about',
        activeImgLink: 'About Me Onthispage.svg',
        hoverImgLink: 'About Me Hover.svg',
        isActive: false,
      },
      {
        srcImg: 'Contact.svg',
        imageLink: 'Contact.svg',
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
