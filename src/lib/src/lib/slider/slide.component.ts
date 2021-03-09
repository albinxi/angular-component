import * as _ from 'lodash';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, ElementRef, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ThemeType } from '../theme';

interface ISliderStyle { width?: string; left?: string; }
interface ISlideEmit { value: number; style: ISliderStyle; }

@Component({
  selector: `tf-range-slide`,
  templateUrl: `slide.component.html`,
  styleUrls: ['../../lib.theme.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TFSliderComponent implements OnInit, AfterViewInit, OnDestroy
{
  @Input() min: number = 0;
  @Input() max: number = 1000;
  @Input() step: number = 1;
  @Input() value: number = 0;
  @Input() showMin: boolean = false;
  @Input() showMax: boolean = false;
  @Input() showValue: boolean = false;
  @Input() showThumb: boolean = false;
  @Input() reverse: boolean = false;

  @Input() thumb: ThemeType;
  @Input() track: ThemeType;

  @Input() eventTrack: boolean = false;
  // only trigger event emit once eventTrack set as TRUE
  @Output() afterChangedHook: EventEmitter<ISlideEmit> = new EventEmitter<ISlideEmit>();
  @Output() onChangeHook: EventEmitter<ISlideEmit> = new EventEmitter<ISlideEmit>();

  public activatedStyle: ISliderStyle = { width: `0px` };
  public thumbStyle: ISliderStyle = { left: `0px` };
  public slideValue: number = 0;

  private launchState: boolean = true;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit()
  {
    this.slideValue = this.value;

    this.validation();
  }

  ngAfterViewInit()
  {
    this.launchState && this.adjustActivated();
    window && window.addEventListener('resize', this.adjustActivated.bind(this));
  }

  ngOnDestroy()
  {
    window && window.removeEventListener('resize', this.adjustActivated.bind(this));
  }

  public validation()
  {
    if (!_.isEqual(this.value, 0))
    { // value not 0
      if (this.value - this.max > 0)
      { // careful overflow
        console.info(`%c Slide default value is smaller than max value.`, 'color: orange');
        this.launchState = false;
        return;
      }
    }

    if (this.step - this.max > 0)
    { // careful overflow
      console.info(`%c Slide step should not greater than max value.`, 'color: orange');
      this.launchState = false;
      return;
    }

    if (this.min - this.max > 0)
    { // careful overflow
      console.info(`%c Slide min value should not greater than max value.`, 'color: orange');
      this.launchState = false;
      return;
    }
  }

  public onInputChange(value: any)
  {
    this.slideValue = _.get(value, 'target.value') || 0;
    this.adjustActivated();

    this.eventTrack && this.onChangeHook.emit({
      value: this.slideValue,
      style: this.activatedStyle
    });
  }

  public afterChanged()
  {
    this.eventTrack && this.afterChangedHook.emit({
      value: this.slideValue,
      style: this.activatedStyle
    });
  }

  private adjustActivated()
  {
    const range: number = this.max - this.min;
    const absValue: number = this.slideValue - this.min
    const percent: number = absValue / range;
    const sliderWidth: number = this.elementRef.nativeElement.querySelector('.range').getBoundingClientRect().width;
    const isBeginValue: boolean = _.isEqual(this.slideValue, this.min);

    if (this.showThumb)
    {
      const valueWidth: number = this.elementRef.nativeElement.querySelector('.thumb-label').getBoundingClientRect().width;
      let labelPosition: number = percent * (sliderWidth - 20) + 10 - valueWidth / 2;
      labelPosition = isBeginValue ? 0 : Math.min(labelPosition, sliderWidth - valueWidth);

      if (this.showMax && _.isEqual(percent, 1))
      {
        this.thumbStyle = { left: `${Math.round(sliderWidth - valueWidth - 10) + 2}px` };
      }
      else
      {
        this.thumbStyle = { left: `${labelPosition}px` };
      }
    }
    const activatedWidth = isBeginValue ? 0 : percent * (sliderWidth - 20);
    const activatedLeft = isBeginValue ? 0 : Math.min(activatedWidth, sliderWidth);

    this.activatedStyle = { width: `${activatedLeft}px` };

    this._changeDetectorRef.markForCheck();
  }

  public getTheme(): string[]
  {
    const themeList: string[] = [];
    !_.isEmpty(this.thumb) && themeList.push(`thumb-${this.thumb}`);
    !_.isEmpty(this.track) && themeList.push(`track-${this.track}`);
    return themeList;
  }

}
