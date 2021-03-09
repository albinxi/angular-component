import * as _ from 'lodash';
import { Component, ViewEncapsulation, Input, Output, OnInit, TemplateRef, ElementRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ThemeType } from '../theme';
import { ITabConfig, ITabEmit } from './tab.interface';

@Component({
  selector: `tf-tab`,
  templateUrl: `tab.component.html`,
  styleUrls: ['../../lib.theme.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TFTabComponent implements OnInit
{

  @Input() theme: ThemeType;
  @Input() fontColor: ThemeType;
  @Input() iconColor: ThemeType;
  @Input() icon: string;

  @Input() config: ITabConfig;
  @Input() templates: TemplateRef<ElementRef>[];

  @Input() eventTrack: boolean = true;
  @Output() tabChangeEmit: EventEmitter<ITabEmit> = new EventEmitter<ITabEmit>();

  public activatedIndex: number = 0;

  constructor() { }

  ngOnInit()
  {
    this.validation();

    this.activatedIndex = _.get(this.config, 'active') || 0;
  }

  private validation()
  {
    !this.config && console.info(`%c Tab config is empty`, 'color: orange');

    !this.templates && console.info(`%c Tab templates should not be empty`, 'color: orange');

    if (this.config && !this.config.controls && this.config.icon && this.config.icon.list)
    {
      this.config.controls = new Array(this.config.icon.list.length);
    }

    if (
      this.config &&
      this.config.controls &&
      this.config.controls.length &&
      this.templates &&
      this.templates.length &&
      !_.isEqual(this.config.controls.length, this.templates.length))
    {
      console.info(`%c Tab templates should equals to controls total number`, 'color: orange');
    }
  }

  public onClick(index: number)
  {
    if (this.eventTrack)
    {
      this.activatedIndex = index;
      this.tabChangeEmit.emit({ active: index });
    }
  }

  public getTheme(): string[]
  {
    const themeList: string[] = [];
    !_.isEmpty(this.theme) && themeList.push(`theme-${this.theme}`);
    !_.isEmpty(this.fontColor) && themeList.push(`color-${this.fontColor}`);
    !_.isEmpty(this.iconColor) && themeList.push(`icon-${this.iconColor}`);
    return themeList;
  }
}
