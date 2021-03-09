import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: `tf-input-example`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="example-section border">
      <div class="example-label middle">Properties</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='input_properties'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Basic Input</div>
      <div class="example-content-row grid-row split-2">
        <tf-input></tf-input>
        <pre><code class="language-html" [innerHTML]='basic_input'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Update Value</div>
      <div class="example-content-row grid-row split-2">
        <tf-input [eventTrack]="true" (valueChangeEmit)="yourEvent($event)" text="{{updatedText}}"></tf-input>
        <label class="example-label">{{updatedText}}</label>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='value_change_emitter'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='value_change_code'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Float Label</div>
      <div class="example-content-row grid-row split-2">
        <tf-input label="I'm a float label"></tf-input>
        <tf-input label="I'm a float label" labelColor="amber" text="Default value"></tf-input>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='basic_float_label'></code></pre>
        <pre><code class="language-html" [innerHTML]='basic_default_value'></code></pre>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='float_label_color'></code></pre>
      </div>
    </section>
    
    <section class="example-section">
      <div class="example-label middle">Addon Start</div>
      <div class="example-content-row grid-row split-2">
        <tf-input inputType="addon" startIcon="home"></tf-input>
        <tf-input inputType="addon" endIcon="send"></tf-input>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Addon End</div>
      <div class="example-content-row grid-row split-2">
        <tf-input inputType="addon" endIcon="done" iconColor="green"></tf-input>
        <tf-input inputType="addon" endIcon="clear" iconColor="red" border="amber"></tf-input>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='start_icon_input'></code></pre>
        <pre><code class="language-html" [innerHTML]='end_icon_input'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Info Label</div>
      <div class="example-content-row grid-row split-2">
        <tf-input inputType="addon" endIcon="done" iconColor="green" [labelInfo]="true" infoText="Valid" infoColor="green" infoPosition="right"></tf-input>
        <tf-input inputType="addon" endIcon="clear" iconColor="red" border="amber" [labelInfo]="true" infoText="This field is required!" infoColor="red"></tf-input>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='start_info_input'></code></pre>
        <pre><code class="language-html" [innerHTML]='end_info_input'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Both Addon</div>
      <div class="example-content-row">
        <tf-input
          inputType="addon"
          startIcon="mail"
          endIcon="send"
        ></tf-input>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='both_icon_input'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Theme</div>
      <div class="example-content-row grid-row split-2">
        <tf-input text="Default"></tf-input>
        <tf-input border="amber" text="Amber"></tf-input>
        <tf-input border="blue" text="Blue"></tf-input>
        <tf-input border="teal" text="Teal"></tf-input>
        <tf-input border="cyan" text="Cyan"></tf-input>
        <tf-input border="black" text="Black"></tf-input>
        <tf-input border="green" text="Green"></tf-input>
        <tf-input border="primary" text="Primary"></tf-input>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='icon_color'></code></pre>
      </div>
    </section>
  `,
})
export class InputExampleComponent implements AfterViewChecked
{
  input_properties =
    `@Input() inputType: InputType = BaseInputTypeEnum.basic;
@Input() text: string = '';
@Input() showLabel: boolean = true;
@Input() label: string = '';
@Input() labelColor: string = '';
@Input() startIcon: string = '';
@Input() endIcon: string = '';
@Input() iconColor: string = '';
@Input() color: ThemeType = ThemeEnum.default;
@Input() border: ThemeType;
@Input() disabled: boolean = false;
@Input() placeholder: string = '';

// bottom info label
@Input() labelInfo: boolean = false;
@Input() infoText: string = '';
@Input() infoPosition: IPositionLR = PositionEnum.left;
@Input() infoColor: ThemeType = ThemeEnum.default;

@Input() eventTrack: boolean = false;
// only trigger output emitter once trackEvent set as true
@Output() valueChangeEmit: EventEmitter<any> = new EventEmitter<any>();`;

  basic_input = this.highlightService.html(`<tf-input></tf-input>`);
  basic_float_label = this.highlightService.html(
    `<tf-input
  label="Float label"
></tf-input>`);
  basic_default_value = this.highlightService.html(
    `<tf-input
  label="Float label"
  text="default value"
></tf-input>`);
  float_label_color = this.highlightService.html(
    `<tf-input
  label="Float label"
  labelColor="amber"
></tf-input>`);

  start_icon_input = this.highlightService.html(
    `<tf-input
  inputType="addon"
  startIcon="home"
></tf-input>`);
  end_icon_input = this.highlightService.html(
    `<tf-input
  inputType="addon"
  endIcon="send"
></tf-input>`);

  start_info_input = this.highlightService.html(
    `<tf-input
  inputType="addon"
  endIcon="done"
  [labelInfo]="true"
  infoText="Valid"
  infoColor="green"
  infoPosition="right"
></tf-input>`);
  end_info_input = this.highlightService.html(
    `<tf-input
  inputType="addon"
  endIcon="clear"
  iconColor="red"
  [labelInfo]="true"
  infoText="This field is required!"
  infoColor="red" 
></tf-input>`);

  both_icon_input = this.highlightService.html(
    `<tf-input
  inputType="addon"
  startIcon="mail"
  endIcon="send"
></tf-input>`);

  icon_color = this.highlightService.html(
    `<tf-input text="Default"></tf-input>
<tf-input border="amber" text="Amber"></tf-input>
<tf-input border="blue" text="Blue"></tf-input>
<tf-input border="teal" text="Teal"></tf-input>
<tf-input border="cyan" text="Cyan"></tf-input>
<tf-input border="black" text="Black"></tf-input>
<tf-input border="green" text="Green"></tf-input>
<tf-input border="primary" text="Primary"></tf-input>`);

  value_change_emitter = this.highlightService.html(
    `<tf-input
  text="{{ updatedText }}"
  [trackEvent]="true"
  (valueChangeEmitter)="yourEvent($event)"
></tf-input>`
  );

  value_change_code = `yourEvent = (str: string) => this.updatedText = str;`;

  public updatedText: string = 'Hello World';

  constructor(
    private readonly highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }

  yourEvent = (str: string) => this.updatedText = str;
}
