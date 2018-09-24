import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { ApiService } from '../../services/api-service/api-service.service';
import { FcmPushService } from '../../services/fcm-service/fcm-push.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  joke: any;
  message: any;
  constructor(private swUpdate: SwUpdate, private apiService: ApiService,
    private fcmPushService: FcmPushService) {
    swUpdate.available.subscribe((event) => {
      swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    });
  }

  ngOnInit() {
    const userId = 'user001';
    try {
      this.fcmPushService.requestPermission(userId);
      this.fcmPushService.receiveMessage();
      this.message = this.fcmPushService.currentMessage;
    } catch (error) {
      console.error(error);
    }
    this.apiService.getJokes().subscribe((joke) => {
      console.log(joke);
      this.joke = joke;
    });
  }

}
