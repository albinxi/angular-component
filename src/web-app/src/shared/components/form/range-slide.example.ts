import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: `tf-range-slide-example`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
    <!-- <section class="example-section">
      <div class="example-label">Properties</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='properties'></code></pre>
      </div>
    </section> -->

    <section class="example-section">
      <div class="example-label">Basic</div>
      <div class="example-content-row grid-row split-2">
        <tf-range-slide></tf-range-slide>
        <pre><code class="language-html" [innerHTML]='basic_slide'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Default Value</div>
      <div class="example-content-row grid-row split-2">
        <tf-range-slide value="400" max="500"></tf-range-slide>
        <pre><code class="language-html" [innerHTML]='default_value'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Show Value</div>
      <div class="example-content-row grid-row split-2">
        <tf-range-slide
          min="0"
          max="500"
          value="400"
          [showValue]="true"
        ></tf-range-slide>
        <pre><code class="language-html" [innerHTML]='show_value'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Show Thumb</div>
      <div class="example-content-row grid-row split-2">
        <tf-range-slide value="400" max="500" [showThumb]="true"></tf-range-slide>
        <pre><code class="language-html" [innerHTML]='show_thumb'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Min and Max</div>
      <div class="example-content-row grid-row split-2">
        <tf-range-slide
          [showMin]="true"
          min="300"
          [showMax]="true"
          max="1000"
          value="400"
          [showThumb]="true"
        ></tf-range-slide>
        <pre><code class="language-html" [innerHTML]='show_min_max'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Step</div>
      <div class="example-content-row grid-row split-2">
        <tf-range-slide
          min="300"
          max="1000"
          value="400"
          step="100"
          [showValue]="true"
        ></tf-range-slide>
        <pre><code class="language-html" [innerHTML]='step_change'></code></pre>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label">Theme</div>
      <div class="example-content-row grid-row split-2">
        <tf-range-slide
          track="blue"
          value="100"
        ></tf-range-slide>
        <tf-range-slide
          track="cyan"
          value="200"
        ></tf-range-slide>
        <tf-range-slide
          track="amber"
          value="300"
        ></tf-range-slide>
        <tf-range-slide
          track="teal"
          value="400"
        ></tf-range-slide>
        <tf-range-slide
          thumb="blue"
          value="100"
        ></tf-range-slide>
        <tf-range-slide
          thumb="cyan"
          value="200"
        ></tf-range-slide>
        <tf-range-slide
          thumb="amber"
          value="300"
        ></tf-range-slide>
        <tf-range-slide
          thumb="teal"
          value="400"
        ></tf-range-slide>
      </div>
    </section>

    
  `,
})
export class RangeSlideExampleComponent implements AfterViewChecked
{
  properties =
    `@Input() min: number = 0;
@Input() max: number = 1000;
@Input() step: number = 1;
@Input() value: number = 0;
@Input() showMin: boolean = false;
@Input() showMax: boolean = false;
@Input() showValue: boolean = false;
@Input() showThumb: boolean = false;
@Input() reverse: boolean = false;

@Input() thumb: ThemeType;
@Input() track: ThemeType;

@Input() eventTrack: boolean = false;
// only trigger event emit once eventTrack set as TRUE
@Output() afterChangedHook: EventEmitter<ISlideEmit> = new EventEmitter<ISlideEmit>();
@Output() onChangeHook: EventEmitter<ISlideEmit> = new EventEmitter<ISlideEmit>();`;


  basic_slide = this.highlightService.html(`<tf-range-slide></tf-range-slide>`);

  default_value = this.highlightService.html(
    `<tf-range-slide
  value="400"
  max="500"
></tf-range-slide>`
  );

  show_value = this.highlightService.html(
    `<tf-range-slide
  min="0"
  max="500"
  value="400"
  [showValue]="true"
></tf-range-slide>`
  );

  show_thumb = this.highlightService.html(
    `<tf-range-slide
  value="400"
  max="500"
  [showThumb]="true"
></tf-range-slide>`
  );

  show_min_max = this.highlightService.html(
    `<tf-range-slide
  [showMin]="true"
  min="300"
  [showMax]="true"
  max="1000"
  value="400"
  [showThumb]="true"
></tf-range-slide>`
  );

  step_change = this.highlightService.html(
    `<tf-range-slide
  min="300"
  max="1000"
  value="400"
  step="100"
  [showValue]="true"
></tf-range-slide>`
  );

  constructor(
    private readonly highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }
}
