import { Component, HostListener, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Notification } from './../../types';
import { ZoomService } from 'src/app/services/zoom.service';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { GridViewService } from 'src/app/services/gridView.service';
import { GridLayout } from 'src/app/enums/grid-layout';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

interface FsDocument extends HTMLDocument {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

interface FsDocumentElement extends HTMLElement {
  mozFullScreenElement?: boolean;
  webkitFullscreenElement?: boolean;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          marginLeft: '$margin-top-notif1',
        })
      ),
      state(
        'closed',
        style({
          marginLeft: '-540px',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
      state(
        'openline',
        style({
          marginLeft: '0',
        })
      ),
      state(
        'closedline',
        style({
          marginLeft: '-3%',
        })
      ),
      transition('openline => closedline', [animate('0.5s')]),
      transition('closedline => openline', [animate('0.5s')]),
    ]),
    trigger('openClose2', [
      state(
        'open2',
        style({
          marginLeft: '$margin-top-notif2',
        })
      ),
      state(
        'closed2',
        style({
          marginLeft: '-610px',
        })
      ),
      transition('open2 => closed2', [animate('0.5s')]),
      transition('closed2 => open2', [animate('0.5s')]),
      state(
        'open2line',
        style({
          marginLeft: '0',
        })
      ),
      state(
        'closed2line',
        style({
          marginLeft: '-7%',
        })
      ),
      transition('open2line => closed2line', [animate('0.5s')]),
      transition('closed2line => open2line', [animate('0.5s')]),
    ]),
    trigger('openClose3', [
      state(
        'open3',
        style({
          marginLeft: '$margin-top-notif3',
        })
      ),
      state(
        'closed3',
        style({
          marginLeft: '-502px',
        })
      ),
      transition('open3 => closed3', [animate('0.5s')]),
      transition('closed3 => open3', [animate('0.5s')]),
      state(
        'open3line',
        style({
          marginLeft: '0',
        })
      ),
      state(
        'closed3line',
        style({
          marginLeft: '-45%',
        })
      ),
      transition('open3line => closed3line', [animate('0.5s')]),
      transition('closed3line => open3line', [animate('0.5s')]),
    ]),
  ],
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[];

  public isOpen = false;
  public isOpen2 = false;
  public isOpen3 = false;
  public faHeart = faHeart;
  public faEye = faEye;
  public faExternalLinkAlt = faExternalLinkAlt;

  GridLayout = GridLayout;

  constructor(
    private notificationService: NotificationsService,
    public zoomService: ZoomService,
    public gridViewService: GridViewService) {}

  ngOnInit(): void {
    this.notificationService.subNotifications.subscribe((res) => {
      this.notifications = res;
    });
    /* setTimeout(() => {
      this.isOpen = true;
    }, 30000);
    setTimeout(() => {
      this.isOpen = false;
    }, 38000);
    setTimeout(() => {
      this.isOpen2 = true;
    }, 60000);
    setTimeout(() => {
      this.isOpen2 = false;
    }, 68000);
    setTimeout(() => {
      this.isOpen3 = true;
    }, 90000);
    setTimeout(() => {
      this.isOpen3 = false;
    }, 98000); */
  }

  /* @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    var currentScrollPos = window.pageYOffset;
     if (currentScrollPos > 1000) {
      setTimeout(() => {
        this.toggle2();
      }, 0);
      setTimeout(() => {
        this.toggle2();
      }, 8000);
     }
     if (currentScrollPos > 1500) {
      setTimeout(() => {
        this.toggle3();
      }, 0);
      setTimeout(() => {
        this.toggle3();
      }, 8000);
     }
  } */

  do(id: string, action: string): void {
    switch (action) {
      case 'close':
        this.notificationService.removeNotification(id);
        break;
      default:
        break;
    }
  }
  public changeZoom(value: number): void {
    this.zoomService.changeZoom(value);
  }

  notif1(): void {
    this.isOpen = !this.isOpen;
    /* setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 12000); */
  }

  notif2(): void {
    this.isOpen2 = !this.isOpen2;
    /* setTimeout(() => {
      this.isOpen2 = !this.isOpen2;
    }, 12000); */
  }

  notif3(): void {
    this.isOpen3 = !this.isOpen3;
    /* setTimeout(() => {
      this.isOpen3 = !this.isOpen3;
    }, 12000); */
  }

  updateLayout(gridLayout: GridLayout) {
    this.gridViewService.gridLayout.next(gridLayout);
  }

  public onesquare(): void {
    this.gridViewService.gridLayout.next(GridLayout.ONESQUARE);
  }

  public foursquares(): void {
    this.gridViewService.gridLayout.next(GridLayout.FOURSQUARE);
  }

  public ninesquares(): void {
    this.gridViewService.gridLayout.next(GridLayout.NINESQUARE);
  }

  openFullscreen(): void {
    const elem: FsDocumentElement = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
}
