import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/database';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import { AngularFireModule } from '../../node_modules/angularfire2';

import { HomePageComponent } from './components/home-page/home-page.component';

import { CountToModule } from 'angular-count-to';
import { BlubComponent } from './components/blub/blub.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SplashscreenComponent } from './components/splashscreen/splashscreen.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlubComponent,
    SplashscreenComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    CountToModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
