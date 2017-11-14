import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Dashboard } from './dashboard/dashboard.component';
import { IncidentComponent } from './incident/incident.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { VideoComponent } from './incident/video/video.component';
import { Vision } from './vision/vision';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    IncidentComponent,
    VideoComponent,
    Vision,
    Dashboard,
    MenuComponent
  ],
  providers: [],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    IncidentComponent,
    Vision,
    Dashboard,
    MenuComponent
  ],
  exports: [
    SharedModule,
    LoginComponent,
    SignupComponent,
    IncidentComponent,
    VideoComponent,
    Vision,
    Dashboard,
    MenuComponent
  ]
})
export class ViewsModule {
}
