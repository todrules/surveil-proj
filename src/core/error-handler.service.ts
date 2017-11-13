import { Injectable } from '@angular/core';
import { AppState } from '../config/interfaces';
import { NotifyService } from './notify.service';

@Injectable()
export class ErrorHandlerService {
  
  private readonly defaultMessage = 'The unknown error is not known. - Captain Obvious';
  
  constructor(private notifyServ: NotifyService) {
  
  }
  
  public handleError = (details?: any): AppState => {
  
    const state = {
      lastError: {
        component: 'AppStateService',
        details: details ? details : this.defaultMessage
      },
      isLoading: false
    };
    this.notifyServ.showNotification(state.lastError.details);
    console.error(state.lastError);
    return state;
  };
}
