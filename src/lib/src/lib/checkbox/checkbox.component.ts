import * as _ from 'lodash';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ThemeType, ThemeEnum } from '../theme';
import { IPosition, PositionEnum } from '../shared.interface';

@Component({
  selector: `tf-checkbox`,
  templateUrl: 'checkbox.component.html',
  styleUrls: ['../../lib.theme.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TFCheckboxComponent implements OnInit
{
  @Input() label: string;
  @Input() labelPosition: IPosition = PositionEnum.right;
  @Input() checked: boolean = false;
  @Input() labelAlign: boolean = false;
  @Input() disable: boolean = false;

  // Theme
  @Input() theme: ThemeType = ThemeEnum.blue; // background
  @Input() color: ThemeType = ThemeEnum.white; // icon color
  @Input() customerClass: string; // class name of customized class for displaying label

  // Add middle state to checkbox. Sets true to enable middle state before all selected
  @Input() multipleStates: boolean = false;
  @Input() middleState: boolean = false;
  @Input() totalState: boolean = false;

  @Input() eventTrack: boolean = false;
  // emitter, trigger once eventTrack set as true
  @Output() stateChangeEmit: EventEmitter<any> = new EventEmitter<any>();

  public uniqueId = _.uniqueId(`checkbox_`);
  public state: boolean = false;

  constructor(
    private readonly elementRef: ElementRef,
  ) { }

  ngOnInit()
  {
    this.checked && (this.state = this.checked);
  }

  getTheme()
  {
    const themeList: string[] = [];
    !_.isEmpty(this.theme) && themeList.push(`theme-${this.theme}`);
    !_.isEmpty(this.color) && themeList.push(`color-${this.color}`);
    return themeList;
  }

  onClick()
  {
    this.eventTrack && this.stateChangeEmit.emit({
      state: !this.state
    });
  }
}
