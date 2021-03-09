import * as _ from 'lodash';
import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { HighlightService } from '../../../shared/highlight.service';

@Component({
  selector: `tf-form`,
  templateUrl: `form.component.html`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements AfterViewChecked
{
  theme_enum =
    `export enum ThemeEnum {
  default = 'red',
  red = 'red',
  blue = 'blue',
  amber = 'amber',
  teal = 'teal',
  cyan = 'cyan',
  white = 'white',
  black = 'black',
  green = 'green',
  success = 'green',
  primary = 'primary' };`;

  theme_type =
    `export declare type ThemeType =
  ThemeEnum.default  |
  ThemeEnum.red      |
  ThemeEnum.blue     |
  ThemeEnum.amber    |
  ThemeEnum.teal     |
  ThemeEnum.cyan     |
  ThemeEnum.white    |
  ThemeEnum.black    |
  ThemeEnum.green    |
  ThemeEnum.success  |
  ThemeEnum.primary;`;

  theme_list =
    `export const ThemeList: ThemeEnum[] =
[
  ThemeEnum.red,
  ThemeEnum.blue,
  ThemeEnum.amber,
  ThemeEnum.teal,
  ThemeEnum.cyan,
  ThemeEnum.white,
  ThemeEnum.black,
  ThemeEnum.green,
  ThemeEnum.primary,
];`;

  public panelStates = {
    theme: false,
    button: false,
    input: false,
    tab: false,
    slide: false,
    spinner: false,
    checkbox: false,
    radio: true,
  };

  constructor(
    private readonly highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }

  activeState(panelName: string)
  {
    this.panelStates = _.mapValues(_.assign({}, this.panelStates), () => false);
    _.set(this.panelStates, panelName, true);
  }

  inactiveState = (panelName: string) => _.set(this.panelStates, panelName, false);

  getState = (panelName: string): boolean => this.panelStates[panelName];
}
