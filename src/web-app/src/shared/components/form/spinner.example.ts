import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: `tf-spinner-example`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
      <section class="example-section">
        <div class="example-label">Properties</div>
        <div class="example-content-row">
          <pre><code class="language-javascript" [innerHTML]='properties'></code></pre>
        </div>
      </section>

      <section class="example-section">
        <div class="example-label">Spinner: </div>
        <div class="example-content-row">
          <tf-spinner></tf-spinner>
          <div class="vertical-diver"></div>
          <tf-spinner dot></tf-spinner>
          <div class="vertical-diver"></div>
          <tf-spinner type="ellipse"></tf-spinner>
          <div class="vertical-diver"></div>
          <tf-spinner material></tf-spinner>
        </div>
      </section>

      <section class="example-section">
        <div class="example-label">Type</div>
        <div class="example-content-row">
          <pre><code class="language-javascript" [innerHTML]='spinner_interface'></code></pre>
        </div>
      </section>

      <section class="example-section">
        <div class="example-label">Theme</div>
        <div class="example-content-row">
          <pre><code class="language-javascript" [innerHTML]='theme'></code></pre>
        </div>
      </section>

      <section class="example-section">
        <div class="example-label"></div>
        <div class="example-content-row">
          <tf-spinner theme="amber"></tf-spinner>
          <div class="vertical-diver"></div>
          <tf-spinner dot theme="blue"></tf-spinner>
          <div class="vertical-diver"></div>
          <tf-spinner type="ellipse" theme="green"></tf-spinner>
          <div class="vertical-diver"></div>
          <tf-spinner material theme="cyan"></tf-spinner>
        </div>
      </section>

      <section class="example-section">
        <div class="example-label"></div>
        <div class="example-content-row">
          <pre><code class="language-html" [innerHTML]='theme_example'></code></pre>
        </div>
      </section>

      <section class="example-section">
        <div class="example-label">Emitter</div>
        <div class="example-content-row">
          <pre><code class="language-javascript" [innerHTML]='spinner_emitter'></code></pre>
        </div>
      </section>

      <section class="example-section border">
        <div class="example-label middle">Example</div>
        <div class="example-content-row">
          <pre><code class="language-html" [innerHTML]='default_spinner'></code></pre>
          <pre><code class="language-html" [innerHTML]='dot_spinner'></code></pre>
          <pre><code class="language-html" [innerHTML]='dot_spinner_simple'></code></pre>
          <pre><code class="language-html" [innerHTML]='ellipse_spinner'></code></pre>
          <pre><code class="language-html" [innerHTML]='ellipse_spinner_simple'></code></pre>
          <pre><code class="language-html" [innerHTML]='material_spinner'></code></pre>
          <pre><code class="language-html" [innerHTML]='material_spinner_simple'></code></pre>
        </div>
      </section>
    `,
})
export class SpinnerExampleComponent implements OnInit, AfterViewChecked
{
  spinner_interface = '';
  spinner_emitter = ``;
  default_spinner = '';
  dot_spinner = '';
  ellipse_spinner = '';
  material_spinner = '';

  dot_spinner_simple = this.highlightService.html(`Dot simple: <tf-spinner dot></tf-spinner>`);
  ellipse_spinner_simple = this.highlightService.html(`Ellipse: <tf-spinner ellipse></tf-spinner>`);
  material_spinner_simple = this.highlightService.html(`Material: <tf-spinner material></tf-spinner>`);

  theme = `'default' | 'red' | 'blue' | 'amber' | 'teal' | 'cyan' | 'white' | 'black' | 'green' | 'success' | 'primary';`;
  theme_example = this.highlightService.html(`Example: <tf-spinner material theme="cyan"></tf-spinner>`);

  properties =
    `@Input() theme: ThemeType = 'red';
@Input() type: SpinnerType = 'default';
@Input() size: SpinnerSize = 'default';
@Input() ring: boolean = false;
@Input() trackEvent: boolean = false;
@Input() material: boolean = false;`;

  constructor(
    private readonly highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }

  ngOnInit()
  {
    this.spinner_interface =
      `export declare type SpinnerType = 'circle' | 'dot' | 'default' | 'ellipse' | 'material';
export declare type SpinnerSize = 'large' | 'default' | 'small';`;

    this.spinner_emitter =
      `@Output() spinnerStart: EventEmitter<any> = new EventEmitter<any>();
@Output() spinnerEnd: EventEmitter<any> = new EventEmitter<any>();`;
    this.default_spinner = this.highlightService.html('Default: <tf-spinner></tf-spinner>');
    this.dot_spinner = this.highlightService.html(`Dot: <tf-spinner type="dot"></tf-spinner>`);
    this.ellipse_spinner = this.highlightService.html(`Ellipse: <tf-spinner type="ellipse"></tf-spinner>`);
    this.material_spinner = this.highlightService.html(`Material: <tf-spinner [material]="true"></tf-spinner>`);
  }
}
