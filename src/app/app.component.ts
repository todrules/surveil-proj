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
import { Vision } from '../views/vision/vision';

@Component({
  selector: 'ion-app',
  templateUrl: './app.template.html'
})
export class AppComponent {
  
  @ViewChild(Nav) nav: Nav;
  
  public rootPage:any = LoginComponent;
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

    this.appStateService.startLoading();
    /*
     When device is ready, check if platform is Cordova (Android, iOS, and Win Phone).
     If true, then 'do stuff'
     */
    this.platform.ready().then((readySource) => {

      
      if(this.platform.is('cordova')) {
        // Stuff being done
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  };
  
  
}

