import * as _ from 'lodash';
import
{
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ThemeType, ThemeEnum } from '../theme';
import { IPositionLR, PositionEnum } from '../shared.interface';

enum BaseInputTypeEnum
{
  basic = 'basic',
  text = 'text',
  small = 'small',
  large = 'large',
  addon = 'addon',
  validation = 'validation'
}

export declare type InputType =
  BaseInputTypeEnum.basic |
  BaseInputTypeEnum.text |
  BaseInputTypeEnum.small |
  BaseInputTypeEnum.large |
  BaseInputTypeEnum.small |
  BaseInputTypeEnum.addon |
  BaseInputTypeEnum.validation;

export interface IInput
{
  inputStyles?: string[];
  value?: string;
  labelColor?: ThemeType;
  color?: ThemeType;
  showLabel?: boolean;
  label?: string;
  text?: string;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  iconColor?: ThemeType;
  borderColor?: ThemeType;
  placeholder?: string;
}

@Component({
  selector: `tf-input`,
  templateUrl: 'input.component.html',
  styleUrls: ['../../lib.theme.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TFInputComponent implements OnInit, OnDestroy
{
  @Input() inputType: InputType = BaseInputTypeEnum.basic;
  @Input() text: string = '';
  @Input() showLabel: boolean = true;
  @Input() label: string = '';
  @Input() labelColor: string = '';
  @Input() startIcon: string = '';
  @Input() endIcon: string = '';
  @Input() iconColor: string = '';
  @Input() color: ThemeType = ThemeEnum.default;
  @Input() border: ThemeType;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';

  // bottom info label
  @Input() labelInfo: boolean = false;
  @Input() infoText: string = '';
  @Input() infoPosition: IPositionLR = PositionEnum.left;
  @Input() infoColor: ThemeType = ThemeEnum.default;

  @Input() eventTrack: boolean = false;
  // only trigger output emitter once trackEvent set as true
  @Output() valueChangeEmit: EventEmitter<any> = new EventEmitter<any>();

  public value = '';
  public uniqueId = _.uniqueId(`input_`);

  constructor(
    private readonly elementRef: ElementRef,
  ) { }

  ngOnInit()
  {
    this.value = this.text || '';

    if (this.eventTrack)
    {
      this.elementRef.nativeElement.addEventListener('input', this.updateValue.bind(this));
    }
  }

  ngOnDestroy()
  {
    if (this.eventTrack)
    {
      this.elementRef.nativeElement.removeEventListener('input', this.updateValue);
    }
  }

  getTheme()
  {
    const themeList: string[] = [];
    !_.isEmpty(this.color) && themeList.push(`color-${this.color}`);
    !_.isEmpty(this.iconColor) && themeList.push(`icon-${this.iconColor}`);
    !_.isEmpty(this.border) && themeList.push(`border-${this.border}`);
    !_.isEmpty(this.labelColor) && themeList.push(`label-${this.labelColor}`);
    return themeList;
  }

  getLabelStyle = (): string[] => [this.infoPosition, this.infoColor];

  updateValue(e: any)
  {
    this.eventTrack && this.valueChangeEmit.emit(e.target.value);
  }
}
