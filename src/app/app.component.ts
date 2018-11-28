import { Component, OnInit } from '@angular/core';
import { FcmPushService } from './services/fcm-service/fcm-push.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '../../node_modules/angularfire2/firestore';
import { Observable } from '../../node_modules/rxjs/internal/Observable';

export interface UserDetails {
  userId: string;
  token?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userDetailsCollection: AngularFirestoreCollection<UserDetails>;
  userDetailsList: Observable<UserDetails[]>;
  userDetailsSnapshot: any;

  noteDoc: AngularFirestoreDocument<UserDetails>;
  note: Observable<UserDetails>;

  constructor(private afs: AngularFirestore, private fcmPushService: FcmPushService) {
  }

  ngOnInit() {
    const userId = 'Anky';
    try {
      this.fcmPushService.requestPermission(userId);
      this.fcmPushService.receiveMessage();
    } catch (error) {
      console.error(error);
    }

    this.userDetailsCollection = this.afs.collection('fcmTokens/');
    this.userDetailsList = this.userDetailsCollection.valueChanges();
    this.userDetailsSnapshot = this.userDetailsCollection.snapshotChanges();

    // this.afs.collection('fcmTokens/').get().subscribe((data) => {
    //   console.log(data.docs);
    // });
  }
}
