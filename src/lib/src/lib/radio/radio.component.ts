import * as _ from 'lodash';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ThemeType, ThemeEnum } from '../theme';
import { IPosition, PositionEnum, IRadioEmit } from '../shared.interface';
import { RadioService } from './radio.service';

@Component({
  selector: `tf-radio`,
  templateUrl: 'radio.component.html',
  styleUrls: ['../../lib.theme.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TFRadioComponent implements OnInit, AfterViewInit
{
  @Input() label: string;
  @Input() name: string;
  @Input() labelPosition: IPosition = PositionEnum.right;
  @Input() checked: boolean = false;
  @Input() labelAlign: boolean = false;
  @Input() disable: boolean = false;

  // Theme
  @Input() theme: ThemeType = ThemeEnum.blue; // background
  @Input() color: ThemeType; // icon color
  @Input() customerClass: string; // class name of customized class for displaying label

  @Input() eventTrack: boolean = false;
  // emitter, trigger once eventTrack set as true
  @Output() stateChangeEmit: EventEmitter<IRadioEmit> = new EventEmitter<IRadioEmit>();

  public uniqueId = _.uniqueId(`radio_`);
  private state: boolean = false;

  constructor(
    private readonly radioService: RadioService,
  ) { }

  ngOnInit()
  {
    this.checked && (this.state = this.checked);
    !this.name && (this.name = this.uniqueId);
  }

  ngAfterViewInit()
  {
    this.radioService.storeStatus(this.name, this.uniqueId);
  }

  getTheme()
  {
    const themeList: string[] = [];
    !_.isEmpty(this.theme) && themeList.push(`theme-${this.theme}`);
    !_.isEmpty(this.color) && themeList.push(`color-${this.color}`);
    return themeList;
  }

  onClick(event: any)
  {
    this.eventTrack && this.stateChangeEmit.emit(_.merge({
      selected: !this.state
    }, this.radioService.getStoredStatus(this.name, this.uniqueId)));
  }
}
