import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { IRadioEmit } from '../shared.interface';

@Injectable()
export class RadioService
{
  private radioGroupCache: {
    [groupName: string]: Set<string>
  } = {};

  private radioGroupStatusCache;

  constructor() { }

  public storeStatus(groupName: string, radio_unique_key: string, isDefaultChecked?: boolean)
  {
    // not exist, store eventTracked radios
    if (!_.get(this.radioGroupCache, groupName))
    {
      this.radioGroupCache[groupName] = new Set();
      this.radioGroupCache[groupName].add(`${radio_unique_key}`);
    }

    if (_.get(this.radioGroupCache, groupName))
    {
      this.radioGroupCache[groupName].add(`${radio_unique_key}`);
    }

    if (isDefaultChecked)
    {

    }
  }

  public getStoredStatus(groupName: string, radio_unique_key?: string): IRadioEmit
  {
    if (_.isUndefined(radio_unique_key))
    {
      return {
        length: [...this.radioGroupCache[groupName]].length || 0
      }
    }

    if (!_.isUndefined(radio_unique_key))
    {
      const groupCache = [...this.radioGroupCache[groupName]];
      return {
        length: groupCache.length || 0,
        active: groupCache.length ? groupCache.indexOf(`${radio_unique_key}`) : null
      }
    }
  }

  public getStoredGroupInfo = (groupName: string) => this.radioGroupCache[groupName];
}
