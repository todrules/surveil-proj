import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AppState } from '../config/interfaces';
import { NotifyService } from './notify.service';

@Injectable()
export class LoadingService {
  
  private readonly defaultMessage = 'Loading...';
  private readonly defaultMaxTime = 3000;
  
  constructor(private loadingCtrl: LoadingController) {
  
  }
  
  public displayLoader = (msg?: string, timeToDisplay?: number) => {
    
    let loading = this.loadingCtrl.create({
      content: msg ? msg : this.defaultMessage
    });
  
    let time = timeToDisplay ? timeToDisplay : this.defaultMaxTime;
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, time);
  };
}
