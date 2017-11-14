import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { StateModule } from '../state/state.module';
import { ViewsModule } from '../views/views.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot({
      name: '__sample_proj',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    
    CoreModule.forRoot(),
    StateModule.forRoot(),
    SharedModule,
    ViewsModule
  ],
  providers: [
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  exports: [
    IonicModule,
    IonicStorageModule,
    StateModule,
    SharedModule,
    ViewsModule
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
