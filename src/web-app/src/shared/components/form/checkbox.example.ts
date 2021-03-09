import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { HighlightService } from '../../../shared/highlight.service';

@Component({
  selector: `tf-checkbox-example`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="example-section">
      <div class="example-label middle">Property</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='properties'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Basic</div>
      <div class="example-content-row">
        <tf-checkbox label="Default checked" [checked]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Default label align right" [eventTrack]="true" (stateChangeEmit)="clickExample($event)"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Label align left" labelPosition="left"></tf-checkbox>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='default_selected'></code></pre>
        <pre><code class="language-html" [innerHTML]='default'></code></pre>
        <pre><code class="language-html" [innerHTML]='label_left'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Disabled</div>
      <div class="example-content-row">
        <tf-checkbox label="Deselected Disabled" [disable]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Selected Disabled" [disable]="true" [checked]="true"></tf-checkbox>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='deselected_disabled'></code></pre>
        <pre><code class="language-html" [innerHTML]='selected_disabled'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Position</div>
      <div class="example-content-row">
        <tf-checkbox label="Label above" labelPosition="top"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Label above and align" labelPosition="top" [labelAlign]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Label below" labelPosition="bottom"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Label below and align" labelPosition="bottom" [labelAlign]="true"></tf-checkbox>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='label_top'></code></pre>
        <pre><code class="language-html" [innerHTML]='label_top_align'></code></pre>
        <pre><code class="language-html" [innerHTML]='label_bottom'></code></pre>
        <pre><code class="language-html" [innerHTML]='label_bottom_align'></code></pre>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle">State Emit</div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='event_track'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Multiple States</div>
      <div class="example-content-row">
        <tf-checkbox
          label="Begin State"
          [multipleStates]="true"
          [middleState]="true"
        ></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox
          label="Middle State"
          [multipleStates]="true"
          [middleState]="true"
          [checked]="true"
        ></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox
          label="All done State"
          [multipleStates]="true"
          [middleState]="false"
          [totalState]="true"
          [checked]="true"
        ></tf-checkbox>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='middle_state'></code></pre>
        <pre><code class="language-html" [innerHTML]='total_state'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Theme</div>
      <div class="example-content-row">
        <tf-checkbox label="Amber" theme="amber" color="black"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Amber" [checked]="true" theme="amber" color="black" [multipleStates]="true" [middleState]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Amber" [checked]="true" theme="amber" color="black"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Red" theme="red" color="white"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Red" [checked]="true" theme="red" color="white" [multipleStates]="true" [middleState]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Red" [checked]="true" theme="red" color="white"></tf-checkbox>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <tf-checkbox label="Teal" theme="teal" color="white"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Teal" [checked]="true" theme="teal" color="white" [multipleStates]="true" [middleState]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Teal" [checked]="true" theme="teal" color="white"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Green" theme="green" color="white"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Green" [checked]="true" theme="green" color="white" [multipleStates]="true" [middleState]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Green" [checked]="true" theme="green" color="white"></tf-checkbox>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <tf-checkbox label="Cyan" theme="cyan" color="black"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Cyan" [checked]="true" theme="cyan" color="black" [multipleStates]="true" [middleState]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Cyan" [checked]="true" theme="cyan" color="black"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Primary" theme="primary" color="white"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Primary" [checked]="true" theme="primary" color="white" [multipleStates]="true" [middleState]="true"></tf-checkbox>
        <div class="vertical-diver"></div>
        <tf-checkbox label="Primary" [checked]="true" theme="primary" color="white"></tf-checkbox>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='theme_example'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Customized</div>
      <div class="example-content-row">
        <tf-checkbox
          label="Please contact admin to update!"
          theme="red"
          color="white"
          [checked]="true"
          [disable]="true"
          customerClass="warning"
        ></tf-checkbox>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='customized'></code></pre>
        <pre><code class="language-css" [innerHTML]='customized_class'></code></pre>
      </div>
    </section>
  `,
})
export class CheckboxExampleComponent implements AfterViewChecked
{
  properties =
    `@Input() label: string;
@Input() labelPosition: IPosition = PositionEnum.right;
@Input() checked: boolean = false;
@Input() labelAlign: boolean = false;
@Input() disable: boolean = false;

// Theme
@Input() theme: ThemeType; // background
@Input() color: ThemeType; // icon color
@Input() customerClass: string; // class name of customized class for displaying label

// Add middle state to checkbox. Sets true to enable middle state before all selected
@Input() multipleStates: boolean = false;
@Input() middleState: boolean = false;
@Input() totalState: boolean = false;

@Input() eventTrack: boolean = false;
// emitter, trigger once eventTrack set as true
@Output() stateChangeEmit: EventEmitter<any> = new EventEmitter<any>();`;


  default_selected = this.highlightService.html(`<tf-checkbox label="label" [checked]="true"></tf-checkbox>`);
  default = this.highlightService.html(`<tf-checkbox label="label"></tf-checkbox>`);

  deselected_disabled = this.highlightService.html(`<tf-checkbox label="label" [disable]="true"></tf-checkbox>`);
  selected_disabled = this.highlightService.html(`<tf-checkbox label="label" [disable]="true" [checked]="true"></tf-checkbox>`);

  label_left = this.highlightService.html(`<tf-checkbox label="label" labelPosition="left"></tf-checkbox>`);

  label_top = this.highlightService.html(`<tf-checkbox label="label" labelPosition="top"></tf-checkbox>`);
  label_top_align = this.highlightService.html(`<tf-checkbox label="label" labelPosition="top" [labelAlign]="true"></tf-checkbox>`);

  label_bottom = this.highlightService.html(`<tf-checkbox label="label" labelPosition="bottom"></tf-checkbox>`);
  label_bottom_align = this.highlightService.html(`<tf-checkbox label="label" labelPosition="bottom" [labelAlign]="true"></tf-checkbox>`);

  event_track = this.highlightService.html(
    `<tf-checkbox
  label="label"
  [eventTrack]="true"
  (stateChangeEmit)="yourEvent($event)"
></tf-checkbox>`
  );

  middle_state = this.highlightService.html(
    `<!-- multipleStates should be TRUE to open multiple state 
and only middle state = TRUE 
but total state not set or FALSE -->
<tf-checkbox
  label="Middle State"
  [multipleStates]="true"
  [middleState]="true"
  [checked]="true"
></tf-checkbox>`
  );

  total_state = this.highlightService.html(
    `<!-- multipleStates should be TRUE to open multiple state 
and only middle state = FALSE 
but total state not set or TRUE -->
<tf-checkbox
  label="All done State"
  [multipleStates]="true"
  [middleState]="false"
  [totalState]="true"
  [checked]="true"
></tf-checkbox>
`);

  theme_example = this.highlightService.html(
    `<tf-checkbox
  label="Cyan"
  [checked]="true"
  theme="cyan"
  color="black"
></tf-checkbox>`
  );

  customized = this.highlightService.html(
    `<tf-checkbox
  label="Please contact admin to update!"
  theme="red"
  color="white"
  [checked]="true"
  [disable]="true"
  customerClass="warning"
></tf-checkbox>`
  );

  customized_class =
    `.warning {
  color: red;
  opacity: 1 !important;
  text-decoration: underline;
}`;

  constructor(
    private readonly highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }

  clickExample(state: any)
  {
    console.log(state);
  }
}
