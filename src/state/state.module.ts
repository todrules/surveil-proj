import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppStateService, INIT_APP_STATE, initialAppState } from './app.state';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IonicStorageModule,
    FormsModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    AppStateService
  ],
  entryComponents: [],
  exports: [
    CommonModule,
    IonicModule,
    IonicStorageModule,
    FormsModule,
    SharedModule
  ]
})
export class StateModule {
  
  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    // Prevent state from having multiple instances
    // We can only have one instance of state!!
    if(parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: INIT_APP_STATE,
          useValue: initialAppState
        }
      ]
    };
  }
}
