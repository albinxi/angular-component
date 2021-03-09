// Theme enum
export enum ThemeEnum
{
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
  primary = 'primary',
  transparent = 'transparent'
};
// Theme type
export declare type ThemeType = ThemeEnum.default |
  ThemeEnum.red |
  ThemeEnum.blue |
  ThemeEnum.amber |
  ThemeEnum.teal |
  ThemeEnum.cyan |
  ThemeEnum.white |
  ThemeEnum.black |
  ThemeEnum.green |
  ThemeEnum.success |
  ThemeEnum.primary |
  ThemeEnum.transparent;
// Available theme usage list
export const ThemeList: ThemeEnum[] = [
  ThemeEnum.red,
  ThemeEnum.blue,
  ThemeEnum.amber,
  ThemeEnum.teal,
  ThemeEnum.cyan,
  ThemeEnum.white,
  ThemeEnum.black,
  ThemeEnum.green,
  ThemeEnum.primary,
  ThemeEnum.transparent,
];
