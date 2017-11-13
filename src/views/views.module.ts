import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IncidentComponent } from './incident/incident.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VideoComponent } from './incident/video/video.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    IncidentComponent,
    VideoComponent
  ],
  providers: [],
  entryComponents: [
    LoginComponent,
    SignupComponent,
    IncidentComponent
  ],
  exports: [
    SharedModule,
    LoginComponent,
    SignupComponent,
    IncidentComponent,
    VideoComponent
  ]
})
export class ViewsModule {
}
