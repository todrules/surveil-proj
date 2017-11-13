import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/if';
// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IonicStorageModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [],
  entryComponents: [],
  exports: [
    CommonModule,
    IonicModule,
    IonicStorageModule,
    FormsModule,
    FlexLayoutModule,
    LoaderComponent
  ]
})
export class SharedModule { }
