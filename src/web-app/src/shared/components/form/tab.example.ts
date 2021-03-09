import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { ITabConfig } from 'src/lib/lib.export';
import { HighlightService } from '../../highlight.service';

@Component({
  selector: `tf-tab-example`,
  styleUrls: [`form.component.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="example-section">
      <div class="example-label middle">Property</div>
      <div class="example-content-row">
        <pre><code class="language-javascript" [innerHTML]='tab_property'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='tab_emit_interface'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle">Config</div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-javascript" [innerHTML]='tab_interface_config'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='tab_interface_config'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-javascript" [innerHTML]='tab_interface_style'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='tab_interface_icon'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Basic</div>
      <div class="example-content-row">
        <tf-tab [config]="basic_config"></tf-tab>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='basic_tab'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='basic_tab_config'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Align Right</div>
      <div class="example-content-row">
        <tf-tab theme="blue" [config]="config_tab_right"></tf-tab>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='align_right'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='align_right_config'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Align Center</div>
      <div class="example-content-row">
        <tf-tab theme="cyan" [config]="config_tab_center"></tf-tab>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='align_center'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='align_center_config'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Justify</div>
      <div class="example-content-row">
        <tf-tab [config]="config_tab_justify"></tf-tab>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='tab_justify'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='tab_justify_config'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Tab Content</div>
      <div class="example-content-row">
        <tf-tab theme="amber" [config]="basic_config" [templates]="[homeTemplate, profileTemplate, messageTemplate, settingTemplate]"></tf-tab>
      </div>
    </section>

    <ng-template #homeTemplate>
      Home tab template
    </ng-template>
    <ng-template #profileTemplate>
      Profile page template
    </ng-template>
    <ng-template #messageTemplate>
      Message tab template
    </ng-template>
    <ng-template #settingTemplate>
      Settings tab template
    </ng-template>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='tab_content'></code></pre>
        <pre><code class="language-html" [innerHTML]='tab_content_templates'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Icon Before</div>
      <div class="example-content-row">
        <tf-tab [config]="config_tab_icon_before"></tf-tab>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='tab_icon_before'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='tab_icon_before_config'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Icon After</div>
      <div class="example-content-row">
        <tf-tab theme="blue" [config]="config_tab_icon_after"></tf-tab>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='tab_icon_after'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='tab_icon_after_config'></code></pre>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label">Icon Only</div>
      <div class="example-content-row">
        <tf-tab [config]="config_tab_icon_only" theme="amber"></tf-tab>
      </div>
    </section>

    <section class="example-section">
      <div class="example-label middle"></div>
      <div class="example-content-row grid-row split-2">
        <pre><code class="language-html" [innerHTML]='tab_icon_only'></code></pre>
        <pre><code class="language-javascript" [innerHTML]='tab_icon_only_config'></code></pre>
      </div>
    </section>
  `,
})
export class TabExampleComponent implements AfterViewChecked
{
  testControls: string[] = [`Home`, `profile`, `message`, `settings`];
  iconLists: string[] = [`home`, `contacts`, `message`, `settings`];

  basic_config: ITabConfig = {
    controls: this.testControls
  };

  config_tab_right: ITabConfig = {
    controls: this.testControls,
    tab: {
      right: true
    }
  };

  config_tab_center: ITabConfig = {
    controls: this.testControls,
    tab: {
      center: true
    }
  };

  config_tab_justify: ITabConfig = {
    active: 1,
    controls: this.testControls,
    tab: {
      justify: true
    }
  };

  config_tab_icon_before: ITabConfig = {
    active: 0,
    controls: this.testControls,
    tab: {
      justify: true
    },
    icon: {
      before: true,
      list: this.iconLists
    }
  };

  config_tab_icon_after: ITabConfig = {
    active: 1,
    controls: this.testControls,
    tab: {
      justify: true
    },
    icon: {
      after: true,
      list: this.iconLists
    }
  };

  config_tab_icon_only: ITabConfig = {
    active: 2,
    tab: {
      justify: true
    },
    icon: {
      only: true,
      list: this.iconLists
    }
  };

  tab_property =
    `@Input() theme: ThemeType;
@Input() fontColor: ThemeType;
@Input() iconColor: ThemeType;
@Input() icon: string;

@Input() config: ITabConfig;
@Input() templates: TemplateRef<ElementRef>[];

@Input() eventTrack: boolean = true;
@Output() tabChangeEmit: EventEmitter<ITabEmit> = new EventEmitter<ITabEmit>();`;

  tab_emit_interface =
    `export interface ITabEmit {
  active: number;
}`;

  tab_interface_config = `export interface ITabConfig {
  active?: number;
  controls?: string[];
  tab?: ITabStyle;
  icon?: ITabIcon;
}`;

  tab_interface_style = `interface ITabStyle {
  right?: boolean;
  center?: boolean;
  justify?: boolean;
}

`;

  tab_interface_icon = `interface ITabIcon {
  before?: boolean;
  after?: boolean;
  only?: boolean;
  list?: string[];
}`;

  basic_tab = this.highlightService.html(`<tf-tab [config]="basic_config"></tf-tab>`);
  basic_tab_config = this.highlightService.html(`public basic_config: ITabConfig = {
  controls: ['Home', 'profile', 'message', 'settings']
};`);

  align_right = this.highlightService.html(`<tf-tab theme="blue" [config]="config_tab_right"></tf-tab>`);
  align_right_config = `public config_tab_right: ITabConfig = {
  controls: ['Home', 'profile', 'message', 'settings'],
  tab: {
    right: true
  }
};`;

  align_center = this.highlightService.html(`<tf-tab theme="cyan" [config]="config_tab_center"></tf-tab>`);
  align_center_config = `public config_tab_center: ITabConfig = {
  controls: ['Home', 'profile', 'message', 'settings'],
  tab: {
    center: true
  }
};`;

  tab_justify = this.highlightService.html(`<tf-tab [config]="config_tab_justify"></tf-tab>`);
  tab_justify_config = `public config_tab_justify: ITabConfig = {
  active: 1,
  controls: ['Home', 'profile', 'message', 'settings'],
  tab: {
    justify: true
  }
};`;

  tab_content = this.highlightService.html(`<tf-tab
  theme="amber"
  [templates]="[
    homeTemplate,
    profileTemplate,
    messageTemplate,
    settingTemplate
  ]"
></tf-tab>`);
  tab_content_templates = this.highlightService.html(`<ng-template #homeTemplate>
  Home tab template
</ng-template>
<ng-template #profileTemplate>
  Profile page template
</ng-template>
<ng-template #messageTemplate>
  Message tab template
</ng-template>
<ng-template #settingTemplate>
  Settings tab template
</ng-template>`);

  tab_icon_before = this.highlightService.html(`<tf-tab
  [config]="config_tab_icon_before"
  theme="red"
></tf-tab>`);
  tab_icon_before_config = `public config_tab_icon_before: ITabConfig = {
  active: 1,
  controls: ['Home', 'profile', 'message', 'settings'],
  tab: {
    justify: true
  },
  icon: {
    before: true,
    list: ['home', 'contacts', 'message', 'settings']
  }
};`;

  tab_icon_after = this.highlightService.html(`<tf-tab
  [config]="config_tab_icon_after"
  theme="blue"
></tf-tab>`);
  tab_icon_after_config = `public config_tab_icon_after: ITabConfig = {
  active: 1,
  controls: ['Home', 'profile', 'message', 'settings'],
  tab: {
    justify: true
  },
  icon: {
    after: true,
    list: ['home', 'contacts', 'message', 'settings']
  }
};`;

  tab_icon_only = this.highlightService.html(`<tf-tab
  [config]="config_tab_icon_only"
  theme="amber"
></tf-tab>`);
  tab_icon_only_config = `public config_tab_icon_only: ITabConfig = {
  controls: ['Home', 'profile', 'message', 'settings'],
  tab: {
    justify: true
  },
  icon: {
    only: true,
    list: ['home', 'contacts', 'message', 'settings']
  }
};`;

  constructor(
    private readonly highlightService: HighlightService,
  ) { }

  ngAfterViewChecked()
  {
    this.highlightService.highlightAll();
  }
}
