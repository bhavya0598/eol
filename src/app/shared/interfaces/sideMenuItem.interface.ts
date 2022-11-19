export interface ISideMenuItem {
  imageLink: string;
  name: string;
  href: string;
  isActive?: boolean;
  activeImgLink: string;
  hoverImgLink: string;
  srcImg: string;
  activeArrowLink?: string | null;
  hoverArrowLink?: string | null;
  showArrow: boolean
}
