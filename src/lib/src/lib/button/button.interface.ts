import { ThemeType } from '../theme';

export interface IButtons
{
  buttonStyles: string[];
  background: ThemeType;
  color: ThemeType;
  text: string;
  disable: boolean;
  icon: string;
  size: ButtonSize;
}

export interface IButtonEmit
{
  click?: boolean;
  enter?: boolean;
  leave?: boolean;
}

export declare type ButtonType = BaseButtonType.basic | BaseButtonType.raised | BaseButtonType.icon | BaseButtonType.fab | BaseButtonType.smallFab;

export enum BaseButtonType
{
  basic = 'basic',
  raised = 'raised',
  icon = 'icon-button',
  fab = 'fab-button',
  smallFab = 'fab-small'
}

export enum ButtonSize
{
  small = 'small',
  default = 'default',
  large = 'large'
}
