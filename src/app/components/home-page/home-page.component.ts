import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { style, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class HomePageComponent implements OnInit {
  public splashScreen = true;
  public showContent = 1;
  public userClickYes = false;
  public isBlubOn = false;
  public notificationText = '';

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe((event) => {
      swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    });
  }

  ngOnInit() {
    // this.splashScreen = true;
    this.showSpalshScreen();
    // this.checkForYesClicked();
    // this.notificationText = 'Please click on the link below and vote for a good Idea.';
    this.notificationText = 'Please hit the button below to see the Results. 🎉';
  }

  private showSpalshScreen() {
    setTimeout(() => {
      this.splashScreen = false;
      this.updateContent();
    }, 1000);
  }

  private updateContent() {
    setInterval(() => {
      if (this.showContent === 3) {
        this.showContent = 1;
      } else {
        this.showContent++;
      }
    }, 2200);
  }

  public submitIdea() {
    this.isBlubOn = true;
    setTimeout(() => {
      // tslint:disable-next-line:max-line-length
      window.location.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=iy2Am_oz-0Cst5_9vRkZ69VXllfmDndDn59Exd5dRIxUQ1VUMDgwNDNNR0k2QVpSSVZFR1RZQlMxMS4u';
    }, 500);

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

  scrollTo(className: string): void {
    console.log(className);
    const elementList = document.querySelectorAll(className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
