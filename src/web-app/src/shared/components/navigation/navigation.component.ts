import * as _ from 'lodash';
import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

import { navigationList } from './navigation.config';

@Component({
  selector: 'tf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent {
  public navigationList = navigationList;

  constructor(
    private readonly route: Router,
  ) {
  }

  public switchRoute = (routeName: string) => {
    this.route.navigate([routeName]);
  };
}
