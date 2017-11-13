import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { IonicApp, IonicModule }                             from 'ionic-angular';
import { CommonModule }                                      from '@angular/common';
import { NotifyService }                                     from './notify';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [

  ],
  providers: [
    NotifyService
  ],
  entryComponents: [

  ],
  exports: [
    CommonModule,
    IonicModule
  ]
})
export class CoreModule {
  
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [

      ]
    };
  }
}