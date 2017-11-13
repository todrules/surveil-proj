import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

const TWO_WEEKS = 60 * 60 * 24 * 7 * 2;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public static title = 'Login';
  public credentials = {
    email: '',
    password: '',
    ttl: TWO_WEEKS
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  public gotoSignup (event) {
    this.navCtrl.push(SignupPage);
  }

  private _loginSuccess() {
    const toast = this.toastCtrl.create({
      message: 'Successfully logged in!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  private _loginError (errMsg: string): void {
    const toast = this.toastCtrl.create({
      message: errMsg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  public doLogin() {
    /*
    this.empService.employeeLogin(this.credentials, 'User').map(res => {
      const token = res.id;
      const profile = res.user;
      this._loginSuccess();
      this.navCtrl.push(MenuPage);
      return res;
    }).catch(err => {
      this._loginError(err);
      return err;
    }).subscribe();
    */
  }
}
