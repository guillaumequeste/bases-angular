import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          marginLeft: '19%',
        })
      ),
      state(
        'closed',
        style({
          marginLeft: '-610px',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
      state(
        'openline',
        style({
          marginLeft: '-9px',
        })
      ),
      state(
        'closedline',
        style({
          marginLeft: '-284px',
        })
      ),
      transition('openline => closedline', [animate('0.5s')]),
      transition('closedline => openline', [animate('0.5s')]),
    ]),
  ],
})
export class NotificationComponent implements OnInit {
  public isOpen = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isOpen = true;
    }, 60000);
    setTimeout(() => {
      this.isOpen = false;
    }, 68000);
  }

  notif(): void {
    this.isOpen = !this.isOpen;
    /* setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 12000); */
  }

}
