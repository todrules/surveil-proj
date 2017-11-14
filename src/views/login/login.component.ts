import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { User } from '../../config/interfaces';
import { AppStateService } from '../../state/app.state';
import { Dashboard } from '../dashboard/dashboard.component';
import { IncidentComponent } from '../incident/incident.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'login-comp',
  templateUrl: './login.template.html'
})
export class LoginComponent {

  public credentials = {
    email: '',
    password: ''
  };
  
  private readonly successMsg = 'Successfully logged in!';
  private readonly errMsg = 'Email or password did not match our records.';
  private user: User = {
    isAuth: false,
    email: '',
    password: '',
    name: {
      firstName: 'Anon User',
      lastName: '',
      nickName: ''
    }
  };

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private appStateServ: AppStateService) {

    this.appStateServ.changes.subscribe((state) => {
      this.user = state.user;
    });
  }

  public gotoSignup = (event) => {
    this.navCtrl.push(SignupComponent);
  };
  
  public doLogin = () => {
    this.appStateServ.startLoading();
    
    setTimeout(() => {
      if(this.verifyCredentials()) {
        
        this.appStateServ.stopLoading();
        this.loginSuccess();
        let state = Object.assign({}, this.appStateServ.getState());
        state.user.isAuth = true;
        state.timestamp = new Date(Date.now()).toLocaleTimeString();
        this.appStateServ.setState(state);
        this.navCtrl.push(Dashboard);
        
      } else {
        this.appStateServ.stopLoading();
        this.loginError();
      }
    }, 3000);
  };
  
  private verifyCredentials = () => {
    
    return (this.user.email === this.credentials.email && this.user.password === this.credentials.password && this.user.email.length > 1 && this.user.password.length > 1);
  };

  private loginSuccess = () => {
    const toast = this.toastCtrl.create({
      message: this.successMsg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  };

  private loginError = (): void => {
    const toast = this.toastCtrl.create({
      message: this.errMsg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  };
}
