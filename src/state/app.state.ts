import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppState } from '../config/interfaces';


export const initialAppState: AppState = {
  isLoading: false,
  timestamp: new Date(Date.now()).toLocaleTimeString(),
  user: {
    isAuth: true,
    email: null,
    password: null,
    name: {
      firstName: 'Anonymous User',
      lastName: null,
      nickName: null
    }
  }
};

export let INIT_APP_STATE = new InjectionToken<AppState>('app.state');

@Injectable()
export class AppStateService {
  
  public state = new BehaviorSubject<AppState>(initialAppState);
  
  private readonly errMsg = 'Houston, we have a problem (AppStateService)';
  
  constructor(
    @Inject(INIT_APP_STATE) config: AppState,
    private storage: Storage) {
    
    this.init(config);
  }
  
  private init = (config) => {
    this.storage.ready().then(() => this.retrieveStorageValues(config));
  };
  
  private retrieveStorageValues = (config) => {
    this.storage.get('app').then((state) => {
      // Init from localStorage (if set) or config (INIT_APP_STATE)
      if(state && state.user && state.user.email && state.user.password) {
        state.timestamp = new Date(Date.now()).toLocaleTimeString();
        this.setState(state);
      } else {
        this.setState(config);
      }
     
    });
  };
  
  // Creates an Observable called 'changes'
  // Subscribe to 'changes' to rcv updates to state
  public changes = this.state.asObservable().distinctUntilChanged()
    .do((changes) => {
    this.storage.set('app', changes);
  });
  
  public getState = () => {
    return this.state.value;
  };
  
  public setState = (state: AppState) => {
   
    // The 'next' method will also trigger 'changes' to emit the new values
    this.state.next(state);
  };

  // Helper methods to update loading status
  public startLoading = () => {
    let state = Object.assign({}, this.getState());
    state.isLoading = true;
    this.setState(state);
  };
  
  public stopLoading = () => {
    let state = Object.assign({}, this.getState());
    state.isLoading = false;
    this.setState(state);
  };
}
