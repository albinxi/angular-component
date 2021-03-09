import { NgModule } from '@angular/core';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from '../shared/custom-reuse-strategy';

import { routes } from '../shared/component.module';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
