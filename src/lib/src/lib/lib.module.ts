import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


import { TFInputComponent } from './input/input.component';
import { TFTabComponent } from './tab/tab.component';
import { TFSliderComponent } from './slider/slide.component';
import { TFButtonComponent } from './button/button.component';
import { TFSpinnerComponent } from './spinner/spinner.component';
import { TFCheckboxComponent } from './checkbox/checkbox.component';
import { TFRadioComponent } from './radio/radio.component';
import { RadioService } from './radio/radio.service';
import { TFListTreeComponent } from './list/tree/tree.list.component';

@NgModule({
  declarations: [
    TFInputComponent,
    TFTabComponent,
    TFSliderComponent,
    TFButtonComponent,
    TFSpinnerComponent,
    TFCheckboxComponent,
    TFRadioComponent,
    TFListTreeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    TFInputComponent,
    TFTabComponent,
    TFSliderComponent,
    TFButtonComponent,
    TFSpinnerComponent,
    TFCheckboxComponent,
    TFRadioComponent,
    TFListTreeComponent,
  ],
  entryComponents: [
    TFButtonComponent,
  ],
  providers: [
    RadioService,
  ]
})
export class TFLibModule
{
  public static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: TFLibModule
    };
  }
}
