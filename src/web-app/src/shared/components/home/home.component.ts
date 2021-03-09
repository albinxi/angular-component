import * as _ from 'lodash';
import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

import { navigationList } from '../navigation/navigation.config';

@Component({
  selector: 'tf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  public currentNavigationList = navigationList;
  public isActive: boolean = false;
  constructor(
    private readonly route: Router,
  ) {
    setTimeout(() => {
      this.isActive = true;
    }, 300);
  }

  public getSplitSize = (size: []) => `split-${size.length}`;

  public switchRoute = (routeName: string) => {
    this.route.navigateByUrl(routeName);
  };
}
