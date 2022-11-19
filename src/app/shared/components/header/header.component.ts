import {
  Component,
  HostListener,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
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
  hamburgerIcon = 'nav collapsed.svg';
  shareIcon = 'share icon.svg';
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
      position: this.screenWidth < 736 ? 'top' : 'start'
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
        srcImg: 'home.svg',
        imageLink: 'home.svg',
        name: 'HOME',
        href: '/home',
        activeImgLink: 'home active.svg',
        activeArrowLink: 'home arrow active.svg',
        hoverArrowLink: 'home arrow hover.svg',
        hoverImgLink: 'home hover.svg',
        isActive: false,
        showArrow: false,
      },
      {
        srcImg: 'about.svg',
        imageLink: 'about.svg',
        name: 'ABOUT ME',
        href: '/about',
        activeImgLink: 'about active.svg',
        hoverImgLink: 'about hover.svg',
        isActive: false,
        activeArrowLink: 'about arrow active.svg',
        hoverArrowLink: 'about arrow hover.svg',
        showArrow: false,
      },
      {
        srcImg: 'contact.svg',
        imageLink: 'contact.svg',
        name: 'CONTACT',
        href: '/contact',
        activeImgLink: 'contact active.svg',
        hoverImgLink: 'contact hover.svg',
        isActive: false,
        activeArrowLink: 'contact arrow active.svg',
        hoverArrowLink: 'contact arrow hover.svg',
        showArrow: false,
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
