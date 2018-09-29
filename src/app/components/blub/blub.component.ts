import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blub',
  templateUrl: './blub.component.html',
  styleUrls: ['./blub.component.scss']
})
export class BlubComponent implements OnInit {
  @Input() isBlubOn;
  constructor() { }

  ngOnInit() {
  }

 public toggleBulb() {
    this.isBlubOn = this.isBlubOn ? false : true;
  }

}
