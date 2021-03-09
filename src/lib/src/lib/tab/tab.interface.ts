export interface ITabConfig {
  active?: number;
  controls?: string[];
  tab?: ITabStyle;
  icon?: ITabIcon;
}

export interface ITabEmit {
  active: number;
}

interface ITabStyle {
  right?: boolean;
  center?: boolean;
  justify?: boolean;
}

interface ITabIcon {
  before?: boolean;
  after?: boolean;
  only?: boolean;
  list?: string[];
}
