import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from 'ionic-angular';
import { AppState } from '../../config/interfaces';
import { AppStateService } from '../../state/app.state';

@Component({
  selector: 'incident-comp',
  templateUrl: './incident.template.html'
})
export class IncidentComponent {
  
  public incidentStatus: string;
  public hasBeenSubmitted: boolean;
  private successMsg = 'Successfully sent report!';
  private isAuth: boolean;
  
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private appStateServ: AppStateService) {
    
    this.hasBeenSubmitted = false;
    this.incidentStatus = 'ACTIVE - NOT SUBMITTED';
  
    this.appStateServ.changes.subscribe((state: AppState) => {
      this.isAuth = state.user.isAuth;
    });
  }
  
  ionViewCanEnter(): boolean {
    return this.isAuth;
  }
  
  public sendReport = () => {
    this.displaySendConfirmation();
  };
  
  public displaySendConfirmation = () => {
    let alert = this.alertCtrl.create({
      title: 'Send report to Emergency Queue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Send',
          handler: () => {
            this.appStateServ.startLoading();
            setTimeout(() => {
              this.appStateServ.stopLoading();
              this.hasBeenSubmitted = true;
              this.displayNotification(this.successMsg);
            }, 3000);
          }
        }
      ]
    });
    alert.present();
  };
  
  private displayNotification(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    
    toast.onDidDismiss(() => {
      // do something
    });
    
    toast.present();
  };
}
