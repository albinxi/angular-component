import * as _ from 'lodash';
import
{
  Component,
  ViewEncapsulation,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ThemeType } from '../theme';
import { ButtonType, BaseButtonType, ButtonSize, IButtonEmit } from './button.interface';

@Component({
  selector: `tf-button, [tf-button]`,
  templateUrl: 'button.component.html',
  styleUrls: ['../../lib.theme.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TFButtonComponent implements OnInit, OnDestroy
{
  @Input() buttonType: ButtonType;
  @Input() background: ThemeType;
  @Input() color: ThemeType;
  @Input() text: string;
  @Input() disable: boolean = false;
  @Input() icon: string;
  @Input() size: ButtonSize;

  @Input() eventTrack: boolean = false;
  @Input() hoverEvent: boolean = false;
  // only trigger once eventTrack set as TRUE
  @Output() clickEmit: EventEmitter<IButtonEmit> = new EventEmitter<IButtonEmit>();
  // only trigger once hoverEvent set as TRUE
  @Output() hoverInEmit: EventEmitter<IButtonEmit> = new EventEmitter<IButtonEmit>();
  @Output() hoverOutEmit: EventEmitter<IButtonEmit> = new EventEmitter<IButtonEmit>();

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit()
  {
    _.isUndefined(this.buttonType) && this.missingType(this.elementRef.nativeElement);

    this.disableCheck(this.elementRef.nativeElement);

    if (this.eventTrack)
    {
      this.elementRef.nativeElement.addEventListener('click', this.componentClick.bind(this));

      if (this.hoverEvent)
      {
        this.elementRef.nativeElement.addEventListener('mouseenter', this.componentEnter.bind(this));
        this.elementRef.nativeElement.addEventListener('mouseleave', this.componentLeave.bind(this));
      }
    }
  }

  ngOnDestroy()
  {
    if (this.eventTrack)
    {
      this.elementRef.nativeElement.removeEventListener('click', this.componentClick);
    }
    if (this.hoverEvent)
    {
      this.elementRef.nativeElement.removeEventListener('mouseenter', this.componentEnter);
      this.elementRef.nativeElement.removeEventListener('mouseleave', this.componentLeave);
    }
  }

  private missingType(ele: any)
  {
    if (ele.hasAttribute('basic'))
    {
      this.buttonType = BaseButtonType.basic;
    }
    if (ele.hasAttribute('icon'))
    {
      this.buttonType = BaseButtonType.icon;
    }
    if (ele.hasAttribute('raise') || ele.hasAttribute('raised'))
    {
      this.buttonType = BaseButtonType.raised;
      ele.hasAttribute('small') && (this.size = ButtonSize.small);
    }
    if (ele.hasAttribute('fab'))
    {
      this.buttonType = BaseButtonType.fab;
      ele.hasAttribute('small') && (this.buttonType = BaseButtonType.smallFab);
    }
  }

  private disableCheck(ele: any)
  {
    if (ele.hasAttribute('disabled') || ele.hasAttribute('disable'))
    {
      this.disable = true;
    }
  }

  public getTheme(type?: string): string[]
  {
    const themeList: string[] = [];
    type && themeList.push(`${BaseButtonType[type]}`);
    !_.isEmpty(this.background) && themeList.push(`background-${this.background}`);
    !_.isEmpty(this.color) && themeList.push(`color-${this.color}`);
    !_.isEmpty(this.size) && themeList.push(`${this.size}`);
    return themeList;
  }

  // fn:0 Component click
  public componentClick = () => this.eventTrack && this.clickEmit.emit({ click: true });
  public componentEnter = () => this.eventTrack && this.hoverInEmit.emit({ enter: true, leave: false });
  public componentLeave = () => this.eventTrack && this.hoverOutEmit.emit({ enter: false, leave: true });
}
