import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { User } from '../../config/interfaces';
import { AppStateService } from '../../state/app.state';
import { IncidentComponent } from '../incident/incident.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.template.html'
})
export class SignupComponent {

  public credentials = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  
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
  
  private readonly successMsg = 'Successfully registered!';

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private appStateServ: AppStateService) {
  
    this.appStateServ.changes.subscribe((state) => {
      this.user = state.user;
    });

  }

  public gotoLogin = (event) => {
    this.navCtrl.push(LoginComponent);
  };
  
  public signup = () => {
    this.appStateServ.startLoading();
    // save the credentials
    this.appStateServ.setState({
      isLoading: true,
      timestamp: new Date(Date.now()).toLocaleTimeString(),
      user: {
        isAuth: false,
        email: this.credentials.email,
        password: this.credentials.password,
        name: {
          firstName: this.credentials.firstName,
          lastName: this.credentials.lastName
        }
      }
    });
    
    setTimeout(() => {
      this.appStateServ.stopLoading();
      this.signupSuccess();
      this.navCtrl.push(LoginComponent);
    }, 3000);
  }
  
  private signupSuccess = () => {
    const toast = this.toastCtrl.create({
      message: this.successMsg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  };

  
}
