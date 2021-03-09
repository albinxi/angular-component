import * as _ from 'lodash';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from './material.module';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

// ------- import components module from below:
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { IconsComponent } from './components/icon/icons.component';
import { TypographyComponent } from './components/typography/typography.component';
import { LayoutComponent } from './components/class/layout.component';
import { BaseClassComponent, ClassComponent, ScssComponent } from './components/class/class.component';
import { FormComponent } from './components/form/form.component';

import { TFLibModule } from 'src/lib/lib.export';

// Example Components
import
{
  RangeSlideExampleComponent,
  ButtonExampleComponent,
  InputExampleComponent,
  TabExampleComponent,
  ThemeExampleComponent,
  SpinnerExampleComponent,
  CheckboxExampleComponent,
  RadioExampleComponent,
} from './components/form/index';

// Route declaration, export to app-routing.module.ts
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'icon',
    component: IconsComponent,
  }, {
    path: 'typography',
    component: TypographyComponent,
  }, {
    path: 'class',
    component: LayoutComponent,
  }, {
    path: 'class/easy',
    component: ClassComponent,
  }, {
    path: 'class/scss',
    component: ScssComponent,
  }, {
    path: 'widget', component: FormComponent, pathMatch: 'full',
  }, {
    path: 'widget/theme', component: ThemeExampleComponent, pathMatch: 'full'
  }, {
    path: 'widget/form', component: FormComponent, pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    FormsModule,
    TFLibModule,
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    IconsComponent,
    TypographyComponent,
    LayoutComponent,
    BaseClassComponent,
    ClassComponent,
    ScssComponent,
    FormComponent,
    RangeSlideExampleComponent,
    ButtonExampleComponent,
    InputExampleComponent,
    TabExampleComponent,
    ThemeExampleComponent,
    SpinnerExampleComponent,
    CheckboxExampleComponent,
    RadioExampleComponent,
  ],
  declarations: [
    NavigationComponent,
    HomeComponent,
    IconsComponent,
    TypographyComponent,
    LayoutComponent,
    BaseClassComponent,
    ClassComponent,
    ScssComponent,
    FormComponent,
    RangeSlideExampleComponent,
    ButtonExampleComponent,
    InputExampleComponent,
    TabExampleComponent,
    ThemeExampleComponent,
    SpinnerExampleComponent,
    CheckboxExampleComponent,
    RadioExampleComponent,
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ComponentModule
{
  public static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: ComponentModule
    };
  }
}
