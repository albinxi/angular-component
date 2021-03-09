import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: `tf-button-example`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="example-section">
      <div class="example-label middle">Size</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='button_size'></code></pre>
      </div>
    </section>

    <section class="example-section border">
      <div class="example-label middle">Properties</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='button_properties'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Basic Button</div>
      <div class="example-content-row button-row">
        <tf-button buttonType="basic" text="Basic"></tf-button>
        <tf-button basic color="amber" text="Amber"></tf-button>
        <tf-button basic color="cyan" text="Cyan"></tf-button>
        <tf-button basic color="red" text="Red"></tf-button>
        <tf-button basic color="teal" text="Teal"></tf-button>
        <tf-button basic text="Disabled" [disable]="true"></tf-button>
      </div>
    </section>

    <section class="example-section border p-t-0">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='basic_button'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Raised Button</div>
      <div class="example-content-row button-row">
        <tf-button raised background="white" color="black" text="White"></tf-button>
        <tf-button raised background="primary" color="white" text="Primary"></tf-button>
        <tf-button raised background="red" color="white" text="Red"></tf-button>
        <tf-button raised background="blue" color="white" text="Blue"></tf-button>
        <tf-button raised background="amber" color="black" text="Amber"></tf-button>
        <tf-button raised text="Disabled" [disable]="true"></tf-button>
      </div>
    </section>

    <section class="example-section border p-t-0">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='raised_button'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Raised Small</div>
      <div class="example-content-row button-row">
        <tf-button small raised background="white" color="black" text="White"></tf-button>
        <tf-button size="small" raised background="primary" color="white" text="Primary"></tf-button>
        <tf-button size="small" raised background="red" color="white" text="Red"></tf-button>
        <tf-button size="small" raised background="blue" color="white" text="Blue"></tf-button>
        <tf-button size="small" raised background="amber" color="black" text="Amber"></tf-button>
        <tf-button size="small" raised text="Disabled" [disable]="true"></tf-button>
      </div>
    </section>

    <section class="example-section border p-t-0">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='raised_small_button'></code></pre>
        <pre><code class="language-html" [innerHTML]='raised_small_button_disabled'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Justify</div>
      <div class="example-content-row button-row">
        <div class="justify-button">
          <tf-button raised background="white" color="black" text="White"></tf-button>
          <tf-button raised background="primary" color="white" text="Primary"></tf-button>
          <tf-button raised background="red" color="white" text="Red"></tf-button>
        </div>
      </div>
    </section>

    <section class="example-section border p-t-0">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='justify_button'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Icon Button</div>
      <div class="example-content-row button-row">
        <tf-button buttonType="icon" icon="more_vert"></tf-button>
        <tf-button buttonType="icon" icon="home" color="blue"></tf-button>
        <tf-button buttonType="icon" icon="menu" color="amber"></tf-button>
        <tf-button buttonType="icon" icon="done" color="green"></tf-button>
        <tf-button buttonType="icon" icon="clear" color="red"></tf-button>
        <tf-button buttonType="icon" icon="send" color="teal"></tf-button>
        <tf-button buttonType="icon" icon="settings" [disable]="true"></tf-button>
      </div>
    </section>

    <section class="example-section border p-t-0">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='icon_button'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">FAB Button</div>
      <div class="example-content-row button-row">
        <tf-button buttonType="fab" color="black" icon="more_vert"></tf-button>
        <tf-button buttonType="fab" background="blue" color="white" icon="home"></tf-button>
        <tf-button buttonType="fab" icon="menu" background="amber"></tf-button>
        <tf-button buttonType="fab" icon="done" background="green"></tf-button>
        <tf-button buttonType="fab" icon="clear" background="red"></tf-button>
        <tf-button buttonType="fab" icon="send" background="teal"></tf-button>
        <tf-button buttonType="fab" icon="settings" [disable]="true"></tf-button>
      </div>
    </section>

    <section class="example-section border p-t-0">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='fab_button'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Small FAB</div>
      <div class="example-content-row">
        <tf-button buttonType="smallFab" color="black" icon="more_vert"></tf-button>
        <tf-button buttonType="smallFab" background="blue" color="white" icon="home"></tf-button>
        <tf-button buttonType="smallFab" icon="menu" background="amber"></tf-button>
        <tf-button buttonType="smallFab" icon="done" background="green"></tf-button>
        <tf-button buttonType="smallFab" icon="clear" background="red"></tf-button>
        <tf-button buttonType="smallFab" icon="send" background="teal"></tf-button>
        <tf-button buttonType="smallFab" icon="settings" [disable]="true"></tf-button>
      </div>
    </section>

    <section class="example-section button-row border">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='fab_small_button'></code></pre>
      </div>
    </section>

    <section class="example-section button-row">
      <div class="example-label middle">Emit Interface</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='click_interface'></code></pre>
      </div>
    </section>

    <section class="example-section button-row">
      <div class="example-label middle">Event Track</div>
      <div class="example-content-row">
        <tf-button
          raised
          background="red"
          color="white"
          text="Click Emit"
          [eventTrack]="true"
          (clickEmit)="checkClick($event)"
        ></tf-button>
        <div class="vertical-diver"></div>
        <div class="result">Is button clicked:   <label class="highlight">{{ isClicked }}</label></div>
        <div class="vertical-diver"></div>
        <tf-button
          raised
          background="red"
          color="white"
          text="Reset"
          [eventTrack]="true"
          (click)="clickReset()"
        ></tf-button>
      </div>
    </section>

    <section class="example-section button-row">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='click_track'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='click_emit_handle'></code></pre>
      </div>
    </section>

    <section class="example-section button-row">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <tf-button
          raised
          background="blue"
          color="white"
          text="Hover Emit"
          [eventTrack]="true"
          [hoverEvent]="true"
          (hoverInEmit)="checkHoverIn($event)"
          (hoverOutEmit)="checkHoverOut($event)"
        ></tf-button>
        <div class="vertical-diver"></div>
        <div class="result">Is mouse entered:   <label class="highlight">{{ isMouseIn }}</label></div>
        <div class="vertical-diver"></div>
        <div class="result">Is mouse left:   <label class="highlight">{{ isMouseOut }}</label></div>
      </div>
    </section>

    <section class="example-section button-row">
      <div class="example-label middle"></div>
      <div class="example-content-row">
        <pre><code class="language-html" [innerHTML]='hover_track'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='hover_emit_handle'></code></pre>
      </div>
    </section>
  `,
})
export class ButtonExampleComponent implements AfterViewChecked
{
  button_size = `size: 'small' | 'default' | 'large'`;
  button_properties =
    `@Input() buttonType: ButtonType;
@Input() background: ThemeType;
@Input() color: ThemeType;
@Input() text: string;
@Input() disable: boolean = false;
@Input() icon: string;
@Input() size: ButtonSize;

@Input() eventTrack: boolean = false;
@Input() hoverEvent: boolean = false;
// only trigger once eventTrack set as TRUE
@Output() clickEmit: EventEmitter<any> = new EventEmitter<any>();
// only trigger once hoverEvent set as TRUE
@Output() hoverInEmit: EventEmitter<any> = new EventEmitter<any>();
@Output() hoverOutEmit: EventEmitter<any> = new EventEmitter<any>();`;

  button_example_properties = this.highlightService.html(
    `
    // Button type: basic, raised, icon and fab
    // Button background: color set in theme
    // Button font color: color set in theme
    // Button text: display text
    // Button icon: Only need to set icon name when type is icon button
    // Button disabled: true to disabled, false or non-set as enabled
    // Button event emitter: true to enable, false or non-set as disabled
`
  );

  basic_button = this.highlightService.html(
    `<tf-button buttonType="basic" text="Basic"></tf-button>

<!-- OR -->
<tf-button basic text="Basic"></tf-button>

<!-- OR -->
<div tf-button buttonType="basic" text="Basic"></div>

<!-- OR -->
<div tf-button basic text="Basic"></div>

<!-- DISABLED -->
<tf-button buttonType="basic" text="Disabled" [disable]="true"></tf-button>

<!-- OR -->
<tf-button basic text="Disabled" disabled></tf-button>`
  );

  raised_button = this.highlightService.html(
    `<tf-button buttonType="raised" background="white" color="black" text="White"></tf-button>

<!-- OR -->
<tf-button raised background="white" color="black" text="White"></tf-button>

<!-- DISABLED -->
<tf-button buttonType="raised" text="Disabled" [disable]="true"></tf-button>

<!-- OR -->
<tf-button raised text="Disabled" disabled></tf-button>`
  );

  raised_small_button = this.highlightService.html(
    `<tf-button
  raised
  small
  background="white"
  color="black"
  text="White"
></tf-button>`);

  raised_small_button_disabled = this.highlightService.html(
    `<tf-button
  raised
  small
  text="Disabled"
  disable
></tf-button>`);

  justify_button = this.highlightService.html(`<div class="justify-button">
  <tf-button raised background="white" color="black" text="White"></tf-button>
  <tf-button raised background="primary" color="white" text="Primary"></tf-button>
  <tf-button raised background="red" color="white" text="Red"></tf-button>
</div>`);

  icon_button = this.highlightService.html(
    `<tf-button buttonType="icon" icon="more_vert"></tf-button>

<!-- OR -->
<tf-button icon icon="more_vert"></tf-button>

<!-- DISABLED -->
<tf-button buttonType="icon" icon="more_vert" [disable]="true"></tf-button>

<!-- OR -->
<tf-button icon icon="more_vert" disabled></tf-button>`);

  fab_button = this.highlightService.html(
    `<tf-button buttonType="fab" color="black" icon="more_vert"></tf-button>

<!-- OR -->
<tf-button fab color="black" icon="more_vert"></tf-button>

<!-- DISABLED -->
<tf-button buttonType="fab" icon="settings" [disable]="true"></tf-button>

<!-- OR -->
<tf-button fab icon="settings" disabled></tf-button>`);

  fab_small_button = this.highlightService.html(
    `<tf-button fab small color="black" icon="more_vert"></tf-button>

<!-- OR -->
<tf-button fab small icon="settings" disabled></tf-button>`);

  click_track = this.highlightService.html(
    `<tf-button
  raised
  background="red"
  color="white"
  text="Click Emit"
  [eventTrack]="true"
  (clickEmit)="checkClick($event)"
></tf-button>`);

  click_interface =
    `export interface IButtonEmit
{
  click?: boolean;
  enter?: boolean;
  leave?: boolean;
}`;

  click_emit_handle = `public checkClick = (event: IButtonEmit) => this.isClicked = event.click;`;

  hover_track = this.highlightService.html(
    `<tf-button
  raised
  background="blue"
  color="white"
  text="Hover Emit"
  [eventTrack]="true"
  [hoverEvent]="true"
  (hoverInEmit)="checkMouseIn($event)"
  (hoverOutEmit)="checkMouseOut($event)"
></tf-button>`);

  hover_emit_handle =
    `public checkMouseIn(event: IButtonEmit)
{
  this.isMouseIn = event.enter;
  this.isMouseOut = event.leave;
}

public checkMouseOut(event: IButtonEmit)
{
  this.isMouseIn = event.enter;
  this.isMouseOut = event.leave;
}`;

  isClicked: boolean = false;
  isMouseIn: boolean = false;
  isMouseOut: boolean = false;

  constructor(
    private readonly highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }

  checkClick = (event: any) => this.isClicked = event.click;
  clickReset = () => this.isClicked = false;

  checkHoverIn(event: any)
  {
    this.isMouseIn = event.enter;
    this.isMouseOut = event.leave;
  }

  checkHoverOut(event: any)
  {
    this.isMouseIn = event.enter;
    this.isMouseOut = event.leave;
  }
}
