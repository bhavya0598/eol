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
      position: this.screenWidth < 736 ? 'top' : 'start',
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
        srcImg: 'book.svg',
        imageLink: 'book.svg',
        name: 'BOOK',
        href: '/book',
        activeImgLink: 'book active.svg',
        hoverImgLink: 'book hover.svg',
        isActive: false,
        activeArrowLink: 'book arrow active.svg',
        hoverArrowLink: 'book arrow hover.svg',
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
        srcImg: 'modality.svg',
        imageLink: 'modality.svg',
        name: 'MODALITY',
        href: '/modality',
        activeImgLink: 'modality active.svg',
        hoverImgLink: 'modality hover.svg',
        isActive: false,
        activeArrowLink: 'modality arrow active.svg',
        hoverArrowLink: 'modality arrow hover.svg',
        showArrow: false,
      },
      {
        srcImg: 'services.svg',
        imageLink: 'services.svg',
        name: 'SERVICES',
        href: '/services',
        activeImgLink: 'services active.svg',
        hoverImgLink: 'services hover.svg',
        isActive: false,
        activeArrowLink: 'services arrow active.svg',
        hoverArrowLink: 'services arrow hover.svg',
        showArrow: false,
      },
      {
        srcImg: 'clienteles.svg',
        imageLink: 'clienteles.svg',
        name: 'CLIENTELES',
        href: '/clienteles',
        activeImgLink: 'clienteles active.svg',
        hoverImgLink: 'clienteles hover.svg',
        isActive: false,
        activeArrowLink: 'clienteles arrow active.svg',
        hoverArrowLink: 'clienteles arrow hover.svg',
        showArrow: false,
      },
      {
        srcImg: 'social.svg',
        imageLink: 'social.svg',
        name: 'SOCIAL',
        href: '/social',
        activeImgLink: 'social active.svg',
        hoverImgLink: 'social hover.svg',
        isActive: false,
        activeArrowLink: 'social arrow active.svg',
        hoverArrowLink: 'social arrow hover.svg',
        showArrow: false,
      },
      {
        srcImg: 'visual.svg',
        imageLink: 'visual.svg',
        name: 'VISUAL ART',
        href: '/visual',
        activeImgLink: 'visual active.svg',
        hoverImgLink: 'visual hover.svg',
        isActive: false,
        activeArrowLink: 'visual arrow active.svg',
        hoverArrowLink: 'visual arrow hover.svg',
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
