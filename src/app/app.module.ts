import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api-service/api-service.service';
import { FcmPushService } from './services/fcm-service/fcm-push.service';

import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/database';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import { AngularFireModule } from '../../node_modules/angularfire2';
import { AsyncPipe } from '../../node_modules/@angular/common';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ApiService, FcmPushService],
  bootstrap: [AppComponent]
})
export class AppModule { }
