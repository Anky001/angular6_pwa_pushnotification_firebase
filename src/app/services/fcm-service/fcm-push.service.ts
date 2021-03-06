import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcmPushService {

  messaging;
  currentMessage = new BehaviorSubject(null);

  constructor(
    private afDB: AngularFireDatabase,
    private afAuth: AngularFireAuth) { }

  /**
   * update token in firebase database
   *
   * @param userId userId as a key
   * @param token token as a value
   */
  updateToken(userId, token) {
    this.afAuth.authState.pipe(take(1)).subscribe(() => {
      // const data = new Object;
      // data[userId] = token;
      const data = {
        userId,
        token
      };
      // this.afDB.object('fcmTokens/').update('Anky').then((test) => {
      //   console.log(test);
      // });
      this.afDB.object('fcmTokens/').update(data).catch((err) => {
        console.log(err);
      });
    });
  }

  /**
   * request permission for notification from firebase cloud messaging
   * @param userId userId
   */
  requestPermission(userId) {
    this.messaging = firebase.messaging();
    this.messaging.requestPermission()
      .then(() => {
        console.log('notification permission granted.');
        return firebase.messaging().getToken();
      })
      .then(token => {
        console.log(token);
        this.updateToken(userId, token);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  /**
   * hook method when new notification received
   */
  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log('new message received.', payload);
      alert(payload.notification.title + ' ' + payload.notification.body);
      this.currentMessage.next(payload);
    });
  }
}
