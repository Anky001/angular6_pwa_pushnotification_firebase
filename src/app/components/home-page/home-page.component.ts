import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { FcmPushService } from '../../services/fcm-service/fcm-push.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private swUpdate: SwUpdate, private fcmPushService: FcmPushService) {
    swUpdate.available.subscribe((event) => {
      swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    });
  }

  ngOnInit() {
    try {
      this.fcmPushService.requestPermission('user001');
      this.fcmPushService.receiveMessage();
    } catch (error) {
      console.error(error);
    }
  }

  public submitIdea() {
    // tslint:disable-next-line:max-line-length
    window.location.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=iy2Am_oz-0Cst5_9vRkZ69VXllfmDndDn59Exd5dRIxUQ1VUMDgwNDNNR0k2QVpSSVZFR1RZQlMxMS4u';
  }

}
