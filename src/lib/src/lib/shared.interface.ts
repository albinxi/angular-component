export * from './radio/radio.interface';


// Position Enum
export enum PositionEnum { top = 'top', right = 'right', bottom = 'bottom', left = 'left' }
// Position interface
export declare type IPosition = PositionEnum.top | PositionEnum.right | PositionEnum.bottom | PositionEnum.left;
// Separate position interface top and bottom
export declare type IPositionTB = PositionEnum.top | PositionEnum.bottom;
// Separate position interface left and right
export declare type IPositionLR = PositionEnum.left | PositionEnum.right;
// Tree List Vertical
export interface ITreeList { display?: string; name?: string; children?: Array<ITreeList>, branch?: Array<ITreeList> };

// Button Emit Interface
