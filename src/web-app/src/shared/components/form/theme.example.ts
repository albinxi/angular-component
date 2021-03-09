import * as _ from 'lodash';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ThemeList } from 'src/lib/lib.export';

@Component({
  selector: `tf-theme-example`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
  templateUrl: `theme-example.component.html`,
})
export class ThemeExampleComponent implements OnInit
{
  public themeList = ThemeList;
  public selectedTheme: string = this.themeList[0];

  private themeCheckList = {
    primary: `#252a34`,
    light: `#1a1d24`,
    blue: `#2196f3`,
    red: `#f44336`,
    green: `#4caf50`,
    amber: `#ffc107`,
    teal: `#009688`,
    black: `#000000`,
    gray: `#607D8B`,
    cyan: `#00bcd4`,
    white: `#FFFFFF`
  };

  private reverseDisplay = ['amber', 'white'];

  constructor() { }

  ngOnInit()
  {
    this.selectedTheme = this.getMappingHex(this.selectedTheme);
  }

  changeTheme = (name: string) => this.selectedTheme = this.getMappingHex(name);

  getMappingHex = (name: string): string => this.themeCheckList[name] || '#F44336';

  shouldReverse = (name: string): boolean => !!_.find(this.reverseDisplay, (i) => i === name);
}
