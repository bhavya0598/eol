import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  count = 2;
  owlPractice =
    'https://portal.owlpractice.ca/earthoflight/booking?therapist_id=1&location_id=1&rate_id=&day=2022-12-06&time=&video_session=0';
  screenWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.count != 0) this.count--;
      // else this.onClick();
    }, 1000);
  }
  onClick() {
    window.location.href = this.owlPractice;
  }
}
