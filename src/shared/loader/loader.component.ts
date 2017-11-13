import { Component, Input } from '@angular/core';
import { AppStateService } from '../../state/app.state';

@Component({
  selector: 'loader-comp',
  templateUrl: './loader.template.html'
})
export class LoaderComponent {

  public isLoading: boolean;

  constructor(private appStateServ: AppStateService) {

    this.appStateServ.changes.subscribe((state) => {
      setTimeout(() => {
        this.isLoading = state.isLoading;
      });
    });
  }
}
