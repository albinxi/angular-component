import * as _ from 'lodash';
import
{
  AfterViewChecked,
  Component,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'tf-layout-example',
  templateUrl: './layout.component.html',
  styleUrls: ['./class.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements AfterViewChecked
{
  public exampleGrid = `.layout-example`;
  public exampleTwoColumnsRange = _.range(10, 100, 10);
  public exampleThreeColumnsRange = _.range(10, 40, 10);

  public keySet = new Set();

  constructor(
    private cdr: ChangeDetectorRef
  )
  {
    this.initialThreeColumnKeys();
  }

  ngAfterViewChecked()
  {
    this.cdr.detectChanges();
  }

  public config_tab_justify = {
    controls: ['Grid: 2 Column', 'Grid: 3 Column', 'Grid: Multiple Rows'],
    tab: { justify: true }
  };

  public twoColumnsString = (size1: any, size2: any): string => `class="grid split-2 column-${size1}-${size2} gap-10 space-around"`;

  public threeColumnsString = (columnKey: any) => `class="grid split-3 column-${columnKey} gap-10 space-around"`;

  private setColumnKeys = (columnKey: any) => this.keySet.add(columnKey);

  private initialThreeColumnKeys()
  {
    this.exampleThreeColumnsRange.map((rangeValue: number) =>
    {
      if (rangeValue !== 0)
      {
        // 1:1:REST
        this.setColumnKeys(`${rangeValue}-${rangeValue}-${100 - 2 * rangeValue}`);
        // 1:REST:1
        this.setColumnKeys(`${rangeValue}-${100 - 2 * rangeValue}-${rangeValue}`);
        // REST:1:1
        this.setColumnKeys(`${100 - 2 * rangeValue}-${rangeValue}-${rangeValue}`);
        // 1:2:REST
        this.setColumnKeys(`${rangeValue}-${2 * rangeValue}-${100 - 3 * rangeValue}`);
        // 2:1:REST
        this.setColumnKeys(`${2 * rangeValue}-${rangeValue}-${100 - 3 * rangeValue}`);
        // 1:REST:2
        this.setColumnKeys(`${rangeValue}-${100 - 3 * rangeValue}-${2 * rangeValue}`);
        // 2:REST:1
        this.setColumnKeys(`${2 * rangeValue}-${100 - 3 * rangeValue}-${rangeValue}`);
        // REST:1:2
        this.setColumnKeys(`${100 - 3 * rangeValue}-${rangeValue}-${2 * rangeValue}`);
        // REST:2:1
        this.setColumnKeys(`${100 - 3 * rangeValue}-${2 * rangeValue}-${rangeValue}`);

        if (rangeValue < 30)
        {
          // 1:3:REST
          this.setColumnKeys(`${rangeValue}-${3 * rangeValue}-${100 - 4 * rangeValue}`);
          // 3:1:REST
          this.setColumnKeys(`${3 * rangeValue}-${rangeValue}-${100 - 4 * rangeValue}`);
          // 1:REST:3
          this.setColumnKeys(`${rangeValue}-${100 - 4 * rangeValue}-${3 * rangeValue}`);
          // 3:REST:1
          this.setColumnKeys(`${3 * rangeValue}-${100 - 4 * rangeValue}-${rangeValue}`);
          // REST:1:3
          this.setColumnKeys(`${100 - 4 * rangeValue}-${rangeValue}-${3 * rangeValue}`);
          // REST:3:1
          this.setColumnKeys(`${100 - 4 * rangeValue}-${3 * rangeValue}-${rangeValue}`);
        }

        if (rangeValue < 20)
        {
          // 1:4:REST
          this.setColumnKeys(`${rangeValue}-${4 * rangeValue}-${100 - 5 * rangeValue}`);
          // 4:1:REST
          this.setColumnKeys(`${4 * rangeValue}-${rangeValue}-${100 - 5 * rangeValue}`);
          // 1:REST:4
          this.setColumnKeys(`${rangeValue}-${100 - 5 * rangeValue}-${4 * rangeValue}`);
          // 4:REST:1
          this.setColumnKeys(`${4 * rangeValue}-${100 - 5 * rangeValue}-${rangeValue}`);
          // REST:1:4
          this.setColumnKeys(`${100 - 5 * rangeValue}-${rangeValue}-${4 * rangeValue}`);
          // REST:4:1
          this.setColumnKeys(`${100 - 5 * rangeValue}-${4 * rangeValue}-${rangeValue}`);
        }

        if (rangeValue === 10)
        {
          // 1:5:REST
          this.setColumnKeys(`${rangeValue}-${5 * rangeValue}-${100 - 6 * rangeValue}`);
          // 5:1:REST
          this.setColumnKeys(`${5 * rangeValue}-${rangeValue}-${100 - 6 * rangeValue}`);
          // 1:REST:5
          this.setColumnKeys(`${rangeValue}-${100 - 6 * rangeValue}-${5 * rangeValue}`);
          // 5:REST:1
          this.setColumnKeys(`${5 * rangeValue}-${100 - 6 * rangeValue}-${rangeValue}`);
          // REST:1:5
          this.setColumnKeys(`${100 - 6 * rangeValue}-${rangeValue}-${5 * rangeValue}`);
          // REST:5:1
          this.setColumnKeys(`${100 - 6 * rangeValue}-${5 * rangeValue}-${rangeValue}`);
        }
      }
    });
  }

  public getThreeColumnsKeys = () => Array.from(this.keySet);

  public isDuplicate = (columnKey: any) => !this.keySet.has(columnKey);
}
