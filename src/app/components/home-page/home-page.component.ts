import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { style, state, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {
  public isBlubOn: boolean = false;
  public userClickYes: boolean = false;
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe((event) => {
      swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    });
  }

  ngOnInit() {
    // this.checkForYesClicked();
  }

  public submitIdea() {
    this.isBlubOn = true;
    setTimeout(() => {
      console.log('called');
      // tslint:disable-next-line:max-line-length
      window.location.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=iy2Am_oz-0Cst5_9vRkZ69VXllfmDndDn59Exd5dRIxUQ1VUMDgwNDNNR0k2QVpSSVZFR1RZQlMxMS4u';
    }, 1000);

  }

  private checkForYesClicked() {
    if (localStorage.getItem('yesClicked') === 'true') {
      this.yesIwant();
    }
  }

  public yesIwant() {
    this.userClickYes = true;
    localStorage.setItem('yesClicked', 'true');
  }

}
