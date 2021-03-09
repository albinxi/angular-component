import * as _ from 'lodash';
import
{
  AfterViewChecked,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { HighlightService } from '../../../shared/highlight.service';

import { Font, Box, Direction } from './class.config';

@Component({
  template: ``,
  encapsulation: ViewEncapsulation.None,
})
export class BaseClassComponent implements AfterViewChecked
{
  public boxConfig = Box;
  public fontConfig = Font;
  public directionConfig = Direction;

  constructor(
    public highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }

  public pureString = (insertValue: string): string => insertValue;

  public generateCodeSnippet = (prefix: any, name: any, size: any, endWith: any): any =>
  {
    return `${prefix}${name}: ${size}${endWith}`;
  }

  public generateCSSSnippet = (prefix: any, name: any, fullName: any, size: any, endWith: any): any =>
  {
    return `${prefix}${name} { ${fullName}: ${size}${endWith} }`;
  }

  public generateFormatCSS = (prefix: any, styleList: any): any =>
  {
    let cssMatrix: string = '';
    styleList.map((eachStyle, index) => cssMatrix += `${Object.keys(eachStyle)[0]}: ${eachStyle[Object.keys(eachStyle)[0]]}${index !== styleList.length - 1 ? '\n  ' : ''}`);
    return `${prefix} {
  ${cssMatrix}
}`;
  }
}

@Component({
  selector: 'tf-easy-example',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassComponent extends BaseClassComponent implements AfterViewChecked
{
  constructor(
    public highlightService: HighlightService,
  )
  {
    super(highlightService);
  }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }

  public getEasyElementList = (key: any) => [{
    big: '',
    small: '',
    full: '',
    key: this.boxConfig[`${key}`].base.prefix,
  }, {
    big: 'Top',
    small: '-t',
    full: '-top',
    key: this.boxConfig[`${key}`].top.prefix
  }, {
    big: 'Right',
    small: '-r',
    full: '-right',
    key: this.boxConfig[`${key}`].right.prefix
  }, {
    big: 'Bottom',
    small: '-b',
    full: '-bottom',
    key: this.boxConfig[`${key}`].bottom.prefix
  }, {
    big: 'Left',
    small: '-l',
    full: '-left',
    key: this.boxConfig[`${key}`].left.prefix
  }];

  public getGapEasyElementList = (key: any) => [{
    big: '',
    small: '',
    full: '',
    key: this.boxConfig[`${key}`].base.prefix,
  }, {
    big: 'Rwo',
    small: '-r',
    full: 'row-',
    key: this.boxConfig[`${key}`].row.prefix
  }, {
    big: 'Column',
    small: '-c',
    full: 'column-',
    key: this.boxConfig[`${key}`].column.prefix
  }];
}

@Component({
  templateUrl: './scss.component.html',
  styleUrls: ['./class.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScssComponent extends BaseClassComponent implements AfterViewChecked
{
  constructor(
    public highlightService: HighlightService,
  )
  {
    super(highlightService);
  }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }
}
