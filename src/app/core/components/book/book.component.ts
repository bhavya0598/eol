import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  owlPractice =
    'https://portal.owlpractice.ca/earthoflight/booking?therapist_id=1&location_id=1&rate_id=&day=2022-12-06&time=&video_session=0';
  screenWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.onClick();
  }

  onClick() {
    window.open(this.owlPractice, "_blank");
    this.router.navigate(['/home'])
  }
}
