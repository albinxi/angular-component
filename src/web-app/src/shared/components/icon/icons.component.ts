import * as _ from 'lodash';
import {
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { iconList } from './icons.list';

/**
 * Example to grab the list from Angular Material site:
 * Link: https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
 * Check the site if all details list in <div class='table-responsive'>...</div>
 * Then:
 *  let listQuery = document.querySelectorAll('.table-responsive');
 * And declare save method to save the result after you filter the list
    (function(console){
      console.save = function(data, filename){

          if(!data) {
              console.error('Console.save: No data')
              return;
          }

          if(!filename) filename = 'console.json'

          if(typeof data === "object"){
              data = JSON.stringify(data, undefined, 4)
          }

          var blob = new Blob([data], {type: 'text/json'}),
              e    = document.createEvent('MouseEvents'),
              a    = document.createElement('a')

          a.download = filename
          a.href = window.URL.createObjectURL(blob)
          a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
          e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
          a.dispatchEvent(e)
      }
    })(console)

    Finally, use regular express to get each category inner text as you want. listQuery[0] is the example and you can literate the list in forEach.
    console.save(listQuery[0].innerText.match(/<mat-icon>(.*?)<\/mat-icon>/g).map(function(val){
      return val.replace(/<\/?mat-icon>/g,'');
    }))
 */
@Component({
  selector: 'tf-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconsComponent {
  public materialIconList: {
    title: string;
    icons: string[];
  }[] = iconList;

  public iconSize: number = 0;

  constructor() {
    _.forEach(this.materialIconList, (eachList) => {
      this.iconSize += eachList.icons.length;
    });
  }
}
