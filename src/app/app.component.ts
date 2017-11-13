import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppState, MenuLink } from '../config/interfaces';
import { Storage } from '@ionic/storage';
import { AppStateService } from '../state/app.state';
import { IncidentComponent } from '../views/incident/incident.component';
import { LoginComponent } from '../views/login/login.component';
import { SignupComponent } from '../views/signup/signup.component';

@Component({
  selector: 'ion-app',
  templateUrl: './app.template.html'
})
export class AppComponent {
  
  @ViewChild(Nav) nav: Nav;
  
  public rootPage:any = IncidentComponent;
  public views: Array<{ title: string, component: any }>;
  public isLoading: boolean;
  
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private storage: Storage,
    private appStateService: AppStateService) {
    
    this.initializeApp();
    
    // Subscribe to any changes in state
    this.appStateService.changes.subscribe((state: AppState) => {
    
    });
  }
  
  private initializeApp = () => {
    
    // Configure views/screen array for menu links
    this.views = [
      { title: 'Welcome', component: IncidentComponent },
      { title: 'Signup', component: SignupComponent },
      { title: 'Login', component: LoginComponent }
    ];
    this.appStateService.startLoading();
    /*
     When device is ready, check if platform is Cordova (Android, iOS, and Win Phone).
     If true, then 'do stuff'
     */
    this.platform.ready().then((readySource) => {
      
      this.openPage(this.rootPage);
      
      if(this.platform.is('cordova')) {
        // Stuff being done
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  };
  
  public openPage = (view: MenuLink) => {
    this.nav.setRoot(view.component).catch((reason) => {
      this.nav.setRoot(LoginComponent);
      // Simulating network lag
      setTimeout(() => {
        this.appStateService.stopLoading();
      }, 2000);
    });
  };
}

