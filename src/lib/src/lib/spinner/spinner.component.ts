import * as _ from 'lodash';
import { Component, ViewEncapsulation, Input, Output, OnInit, EventEmitter, OnDestroy, ElementRef } from '@angular/core';
import { SpinnerType, SpinnerSize } from './spinner.interface';
import { ThemeType, ThemeEnum } from '../theme';

@Component({
  selector: `tf-spinner`,
  templateUrl: `spinner.component.html`,
  styleUrls: ['../../lib.theme.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TFSpinnerComponent implements OnInit, OnDestroy
{
  @Input() theme: ThemeType = ThemeEnum.default;
  @Input() type: SpinnerType = 'default';
  @Input() size: SpinnerSize = 'default';
  @Input() ring: boolean = false;
  @Input() trackEvent: boolean = false;
  @Input() material: boolean = false;

  @Output() spinnerStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() spinnerEnd: EventEmitter<any> = new EventEmitter<any>();

  public showSpan: boolean = false;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit()
  {
    !_.isUndefined(this.type) && this.missingType(this.elementRef.nativeElement);

    this.showSpan = !this.ring && _.isEqual(this.type, 'dot');
    // emit start event
    this.spinnerStart.emit();
  }

  ngOnDestroy()
  {
    // emit stop event
    this.spinnerEnd.emit();
  }

  spinnerStyle = (): string[] => [this.type, this.theme];

  private missingType(ele: any)
  {
    if (ele.hasAttribute('circle'))
    {
      this.type = 'circle';
    }
    if (ele.hasAttribute('dot'))
    {
      this.type = 'dot';
    }
    if (ele.hasAttribute('default'))
    {
      this.type = 'default';
    }
    if (ele.hasAttribute('ellipse'))
    {
      this.type = 'ellipse';
    }
    if (ele.hasAttribute('material'))
    {
      this.type = 'material';
      this.material = true;
    }
  }
}
