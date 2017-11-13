import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  public static title = 'Signup';
  public credentials = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {

  }

  public gotoLogin (event) {
    this.navCtrl.push(LoginPage);
  }

  private _signupSuccess () {
    const toast = this.toastCtrl.create({
      message: 'Successfully signed up!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  private _signupError (errMsg: string): void {
    const toast = this.toastCtrl.create({
      message: errMsg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  doSignup() {
    /*
    this.empService.employeeCreate(this.credentials).map(res => {
      const profile = res;
      this._signupSuccess();
      this.navCtrl.push(LoginPage);
    }).catch(err => {
      this._signupError(err);
      return err;
    }).subscribe();
    */
  }
}
