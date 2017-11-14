import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { AppStateService } from '../../state/app.state';
import { IncidentComponent } from '../incident/incident.component';
import { LoginComponent } from '../login/login.component';
import { Dashboard } from '../dashboard/dashboard.component';
import { SignupComponent } from '../signup/signup.component';
import { Vision } from '../vision/vision';


@Component({
  selector: 'menu-comp',
  templateUrl: './menu.template.html'
})
export class MenuComponent {

  @ViewChild(Nav) nav: Nav;
  
  public rootPage: any = LoginComponent;
  public pages: Array<{ title: string, component: any }>;
  
  constructor(private appStateServ: AppStateService) {

    this.pages = [
      {
        title: 'Dashboard',
        component: Dashboard
      }, {
        title: 'Vision',
        component: Vision
      }, {
        title: 'Logout',
        component: LoginComponent
      }
    ];
  }
  
  openPage = (page) => {
    if(page.title === 'Logout') {
      let state = {
        isLoading: false,
        timestamp: new Date(Date.now()).toLocaleTimeString(),
        user: {
          isAuth: false,
          email: null,
          password: null,
          name: {
            firstName: 'Anonymous User',
            lastName: null,
            nickName: null
          }
        }
      }
      this.appStateServ.setState(state);
    }
    
    this.nav.setRoot(page.component);
  }
}
