import * as _ from 'lodash';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ThemeType, ThemeEnum } from '../../theme';
import { ITreeList } from '../../shared.interface';

@Component({
  selector: `tf-list-tree`,
  templateUrl: 'tree.list.component.html',
  styleUrls: ['../../../lib.theme.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TFListTreeComponent
{
  @Input()
  get list()
  {
    return this._list;
  }
  set list(newList: [])
  {
    this._list = newList || [];
  }

  @Input()
  get binary()
  {
    return this._binary;
  }
  set binary(val: boolean)
  {
    this._binary = val;
  }

  @Input()
  get color()
  {
    return this._colorTheme;
  }
  set color(val: ThemeType)
  {
    this._colorTheme = val;
  }

  @Input()
  get border()
  {
    return this._borderTheme;
  }
  set border(val: ThemeType)
  {
    this._borderTheme = val;
  }

  private _list: [] = [];
  private _binary: boolean = false;
  private _colorTheme: ThemeType = ThemeEnum.white;
  private _borderTheme: ThemeType = ThemeEnum.white;

  constructor(
  ) { }

  public isEmpty = () => _.isEmpty(this.list);

  public validation(): boolean
  {
    if (this.isEmpty())
    {
      console.info(`%c Tree List is empty`, 'color: orange');
      return false;
    }

    if (!_.isUndefined(_.get(this.list, 'children')) && !_.isUndefined(_.get(this.list, 'branch')))
    {
      console.info(`%c Tree List must follow interface: ITreeList`, 'color: orange');
      return false;
    }
    return true;
  }

  public hasBranch(node: ITreeList): boolean
  {
    if (_.get(node, 'children'))
    {
      return !_.isEmpty(node.children);
    }

    if (_.get(node, 'branch'))
    {
      return !_.isEmpty(node.branch);
    }
  }

  public getTheme = (): string[] => [`color-${this.color}`, `border-${this.border}`];
}
