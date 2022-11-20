import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadcrumb } from '../../interfaces/breadcrumb.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  providers: [TitleCasePipe],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: IBreadcrumb[] = [
    {
      path: '/home',
      name: 'Home',
    },
  ];
  constructor(router: Router, public titlecasePipe: TitleCasePipe) {
    var url = router.url.split('/').slice(1);
    url.forEach((x) =>
      this.breadcrumbs.push({
        path: '/' + x,
        name: this.titlecasePipe.transform(x),
      })
    );
  }

  ngOnInit(): void {}
}
