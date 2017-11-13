import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class NotifyService {
  
  constructor(public toastCtrl: ToastController) {
  
  }
  
  displayToastMessage(msg: string, duration?: number) {
    let message: string;
    let amount: number;
    
    if(msg) {
      message = msg;
    } else {
      message = 'This is a test message.';
    }
    
    if(duration) {
      amount = duration;
    } else {
      amount = 3000;
    }
    
    let toast = this.toastCtrl.create({
      message: message, duration: amount, position: 'top'
    });
    toast.present();
  }
}
