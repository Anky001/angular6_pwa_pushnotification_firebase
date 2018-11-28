import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

import { FcmPushService } from './services/fcm-service/fcm-push.service';

import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/database';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import { AngularFireModule } from '../../node_modules/angularfire2';
import { AngularFirestoreModule } from '../../node_modules/angularfire2/firestore';

import { HomePageComponent } from './components/home-page/home-page.component';

import { CountToModule } from 'angular-count-to';
import { BlubComponent } from './components/blub/blub.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashscreenComponent } from './components/splashscreen/splashscreen.component';
import { ResultsComponent } from './components/results/results.component';

import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlubComponent,
    SplashscreenComponent,
    ResultsComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    BrowserModule,
    BrowserAnimationsModule,

    ChartsModule,
    CountToModule,

    HttpClientModule,

    RouterModule.forRoot(routes, {
      useHash: true
    }),

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [FcmPushService],
  bootstrap: [AppComponent]
})
export class AppModule { }
