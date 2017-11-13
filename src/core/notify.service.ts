import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class NotifyService {
  
  private readonly defaultMessage = 'Well... something happened. Just not sure what.';
  
  constructor(public toastCtrl: ToastController) {
  
  }
  
  public showNotification(msg?: string, timeInMsecs?: number) {

    let message = msg ? msg : this.defaultMessage;
    let displayTime = timeInMsecs ? timeInMsecs : 3000;
    
    let toast = this.toastCtrl.create({
      message: message,
      duration: displayTime,
      position: 'bottom'
    });
    toast.present();
  }
}
