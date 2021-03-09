import * as _ from 'lodash';
import
{
  AfterViewChecked,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: 'tf-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TypographyComponent implements AfterViewChecked
{

  public h1_example = `<h1> Headline 1 </h1>`;
  public h1_css_example = `font-size: $h1-font-size;`;
  public h1_font_example = `$h1-font-size: 32px !default;`;

  public h2_example = `<h2> Headline 2 </h2>`;
  public h2_css_example = `font-size: $h2-font-size;`;
  public h2_font_example = `$h2-font-size: 28px !default;`;

  public h3_example = `<h3> Headline 3 </h3>`;
  public h3_css_example = `font-size: $h3-font-size;`;
  public h3_font_example = `$h3-font-size: 24px !default;`;

  public h4_example = `<h4> Headline 4 </h4>`;
  public h4_css_example = `font-size: $h4-font-size;`;
  public h4_font_example = `$h4-font-size: 20px !default;`;

  public h5_example = `<h5> Headline 5 </h5>`;
  public h5_css_example = `font-size: $h5-font-size;`;
  public h5_font_example = `$h5-font-size: 16px !default;`;

  public h6_example = `<h6> Headline 6 </h6>`;
  public h6_css_example = `font-size: $h6-font-size;`;
  public h6_font_example = `$h6-font-size: 12px !default;`;

  public mark_example = `<mark> Marked Text </mark>`;
  public del_example = `<del> Deleted Text </del>`;
  public abbr_example = `<abbr title="more info ...">Abbreviations Text</abbr>`;

  public blockquote_default = `  <blockquote>
    <div class="example">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
    </div>
  </blockquote>`;

  public blockquote_footer_default = `  <blockquote>
    <div class="example">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
    </div>
    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>`;

  public blockquote_reverse = `  <blockquote class="reverse">
    <div class="example">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
    </div>
    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>`;

  public studentSchedule = {
    display: 'Student Schedule',
    children: [
      {
        display: 'Share Subscription',
        children: [
          {
            display: 'Share Subscription'
          },
          {
            display: 'Access Control'
          }
        ]
      }, {
        display: 'Calendar'
      }, {
        display: 'Profile',
        children: [
          {
            display: 'Change Password'
          },
          {
            display: 'Switch Language'
          }
        ]
      }, {
        display: 'Map',
        children: [
          {
            display: 'Geo Alert'
          },
          {
            display: 'Path Line & Stops'
          }
        ]
      }
    ]
  };

  public messageCenter = {
    display: 'Message Center',
    children: [
      {
        display: 'Messages'
      },
      {
        display: 'Announcements'
      },
      {
        display: 'Forms',
      }
    ]
  };

  public treeList = [{
    display: 'Stop Finder Application',
    children: [this.studentSchedule, this.messageCenter]
  }];

  public horizontalList = [{
    display: 'Stop Finder Application',
    children: [this.studentSchedule]
  }];

  public treeListExample = this.highlightService.html(`<tf-list-tree [list]="treeList"></tf-list-tree>`);

  constructor(
    public highlightService: HighlightService,
  )
  { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }
}
