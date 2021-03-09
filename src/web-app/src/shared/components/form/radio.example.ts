import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { HighlightService } from '../../../shared/highlight.service';

@Component({
  selector: `tf-radio-example`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="example-section border">
      <div class="example-label middle">Property</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='properties'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Basic</div>
      <div class="example-content-row">
        <tf-radio name="basic_example" label="Radio 1" [checked]="true"></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio name="basic_example" label="Radio 2"></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio name="basic_example" label="Radio 3"></tf-radio>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='basic_radio'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <tf-radio name="basic_example_2" label="Radio 1" [checked]="true" labelPosition="left"></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio name="basic_example_2" label="Radio 2" labelPosition="left"></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio name="basic_example_2" label="Radio 3" labelPosition="left"></tf-radio>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='position_left'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <tf-radio
          name="basic_example_disabled"
          label="Disable and Selected"
          [checked]="true"
          [disable]="true"
        ></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio
          name="basic_example_disabled"
          label="Disable and Deselected"
          [disable]="true"
        ></tf-radio>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='disable_checkbox'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Position</div>
      <div class="example-content-row">
        <tf-radio
          name="basic_example_3"
          label="Label Top"
          [checked]="true"
          labelPosition="top"
        ></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio
          name="basic_example_3"
          label="Label Top and Align"
          labelPosition="top"
          [labelAlign]="true"
        ></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio
          name="basic_example_4"
          label="Label Bottom"
          labelPosition="bottom"
        ></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio
          name="basic_example_4"
          label="Label Bottom and Align"
          labelPosition="bottom"
          [labelAlign]="true"
          [checked]="true"
        ></tf-radio>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='position_top'></code></pre>
        <pre><code class="language-html" [innerHTML]='position_top_align'></code></pre>
        <pre><code class="language-html" [innerHTML]='position_bottom'></code></pre>
        <pre><code class="language-html" [innerHTML]='position_bottom_align'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Vertical</div>
      <div class="example-content-row grid-row split-2 size-1of3">
        <div class="flex-column gap-10 p-t-10">
          <tf-radio name="basic_example_5" label="Radio 1" [checked]="true"></tf-radio>
          <tf-radio name="basic_example_5" label="Radio 2"></tf-radio>
          <tf-radio name="basic_example_5" label="Radio 3"></tf-radio>
        </div>
        <pre><code class="language-html" [innerHTML]='vertical_easy'></code></pre>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle">_ease.scss</div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-css" [innerHTML]='flex_column'></code></pre>
        <pre><code class="language-css" [innerHTML]='flex_gap'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Theme</div>
      <div class="example-content-row grid-row split-2">
        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_amber"
            label="Amber (theme only)"
            [checked]="true"
            theme="amber"
          ></tf-radio>
          <tf-radio name="theme_amber" label="Amber" theme="amber"></tf-radio>
        </div>
        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_amber_color"
            label="Amber (with color)"
            [checked]="true"
            theme="amber"
            color="white"
          ></tf-radio>
          <tf-radio
            name="theme_amber_color"
            label="Amber"
            theme="amber"
            color="white"
          ></tf-radio>
        </div>

        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_red"
            label="Red (theme only)"
            [checked]="true"
            theme="red"
          ></tf-radio>
          <tf-radio name="theme_red" label="Red" theme="red"></tf-radio>
        </div>
        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_red_color"
            label="Red (with color)"
            [checked]="true"
            theme="red"
            color="white"
          ></tf-radio>
          <tf-radio
            name="theme_red_color"
            label="Red"
            theme="red"
            color="white"
          ></tf-radio>
        </div>

        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_teal"
            label="Teal (theme only)"
            [checked]="true"
            theme="teal"
          ></tf-radio>
          <tf-radio name="theme_teal" label="Teal" theme="teal"></tf-radio>
        </div>
        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_teal_color"
            label="Teal (with color)"
            [checked]="true"
            theme="teal"
            color="white"
          ></tf-radio>
          <tf-radio
            name="theme_teal_color"
            label="Teal"
            theme="teal"
            color="white"
          ></tf-radio>
        </div>

        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_cyan"
            label="Cyan (theme only)"
            [checked]="true"
            theme="cyan"
          ></tf-radio>
          <tf-radio name="theme_cyan" label="Cyan" theme="cyan"></tf-radio>
        </div>
        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_cyan_color"
            label="Cyan (with color)"
            [checked]="true"
            theme="cyan"
            color="white"
          ></tf-radio>
          <tf-radio
            name="theme_cyan_color"
            label="Cyan"
            theme="cyan"
            color="white"
          ></tf-radio>
        </div>

        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_green"
            label="Green (theme only)"
            [checked]="true"
            theme="green"
          ></tf-radio>
          <tf-radio name="theme_green" label="Green" theme="green"></tf-radio>
        </div>
        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_green_color"
            label="Green (with color)"
            [checked]="true"
            theme="green"
            color="white"
          ></tf-radio>
          <tf-radio
            name="theme_green_color"
            label="Green"
            theme="green"
            color="white"
          ></tf-radio>
        </div>

        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_primary"
            label="Primary (theme only)"
            [checked]="true"
            theme="primary"
          ></tf-radio>
          <tf-radio name="theme_primary" label="Primary" theme="primary"></tf-radio>
        </div>
        <div class="grid split-2 auto gap-20">
          <tf-radio
            name="theme_primary_color"
            label="Primary (with color)"
            [checked]="true"
            theme="primary"
            color="white"
          ></tf-radio>
          <tf-radio
            name="theme_primary_color"
            label="Primary"
            theme="primary"
            color="white"
          ></tf-radio>
        </div>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='theme_example'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Emit Event</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='emit_interface'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <tf-radio
          name="emit_example"
          label="Radio 1"
          [eventTrack]="true"
          (stateChangeEmit)="onRadioSelect($event)"
        ></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio
          name="emit_example"
          label="Radio 2"
          [eventTrack]="true"
          (stateChangeEmit)="onRadioSelect($event)"
        ></tf-radio>
        <div class="vertical-diver"></div>
        <tf-radio
          name="emit_example"
          label="Radio 3"
          [eventTrack]="true"
          (stateChangeEmit)="onRadioSelect($event)"
        ></tf-radio>
      </div>
    </section>

  `,
})
export class RadioExampleComponent implements AfterViewChecked
{
  properties = `@Input() label: string;
@Input() name: string;
@Input() labelPosition: IPosition = PositionEnum.right;
@Input() checked: boolean = false;
@Input() labelAlign: boolean = false;
@Input() disable: boolean = false;

// Theme
@Input() theme: ThemeType = ThemeEnum.blue; // background
@Input() color: ThemeType; // icon color
@Input() customerClass: string; // class name of customized class for displaying label

@Input() eventTrack: boolean = false;
// emitter, trigger once eventTrack set as true
@Output() stateChangeEmit: EventEmitter<any> = new EventEmitter<any>();`;

  basic_radio = this.highlightService.html(
    `<tf-radio name="example_name" label="Radio 1"></tf-radio>`
  );

  disable_checkbox = this.highlightService.html(
    `<tf-radio
  name="example"
  label="Label"
  [checked]="true"
  [disable]="true"
></tf-radio>`
  );

  position_left = this.highlightService.html(
    `<tf-radio
  name="example_name"
  label="Radio 1"
  [checked]="true"
  labelPosition="left"
></tf-radio>`
  );

  position_top = this.highlightService.html(
    `<tf-radio
  name="example_name"
  label="Label Top"
  [checked]="true"
  labelPosition="top"
></tf-radio>`
  );

  position_top_align = this.highlightService.html(
    `<tf-radio
  name="example_name"
  label="Label Top and Align"
  labelPosition="top"
  [labelAlign]="true"
></tf-radio>`
  );

  position_bottom = this.highlightService.html(
    `<tf-radio
  name="example_name"
  label="Label Bottom"
  labelPosition="bottom"
></tf-radio>`
  );

  position_bottom_align = this.highlightService.html(
    `<tf-radio
  name="example_name"
  label="Label Bottom and Align"
  labelPosition="bottom"
  [labelAlign]="true"
></tf-radio>`
  );

  vertical_easy = this.highlightService.html(
    `<div class="flex-column gap-10">
  <tf-radio name="example" label="Radio 1" [checked]="true"></tf-radio>
  <tf-radio name="example" label="Radio 2"></tf-radio>
  <tf-radio name="example" label="Radio 3"></tf-radio>
</div>`
  );

  flex_column = `.flex-column {
  display: flex;
  flex-direction: column;
}`;

  flex_gap = `// From 0 to 115, step as 5px
.g-10, .gap-10 {
  gap: 10px;
}`;

  theme_example = this.highlightService.html(
    `<!-- property: color is optional to set. If color is not set,
  default radio theme will be the same as property: theme -->
<tf-radio
  name="example"
  label="Label"
  theme="amber"
  color="white"
></tf-radio>`
  );

  emit_interface = `export interface IRadioEmit
{
  length?: number;      // total length (name is the same)
  active?: number;      // activated index
  selected?: boolean;   // current click radio status
}`;

  emit_example = this.highlightService.html(
    `<tf-radio
  name="emit_example"
  label="Radio 1"
  [eventTrack]="true"
  (stateChangeEmit)="onRadioSelect($event)"
></tf-radio>
<div class="vertical-diver"></div>
<tf-radio
  name="emit_example"
  label="Radio 2"
  [eventTrack]="true"
  (stateChangeEmit)="onRadioSelect($event)"
></tf-radio>
<div class="vertical-diver"></div>
<tf-radio
  name="emit_example"
  label="Radio 3"
  [eventTrack]="true"
  (stateChangeEmit)="onRadioSelect($event)"
></tf-radio>`
  );

  emit_info = ``;

  constructor(
    private readonly highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }

  onRadioSelect(event: any)
  {
    console.log(event);
  }
}
