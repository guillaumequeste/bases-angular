import {AfterViewInit, Component, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';
import {faHeart as icon, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import {CartService} from 'src/app/services/cart.service';
import {QuickviewService} from 'src/app/services/quickview.service';
import {TileActionEvent} from './../../backoffice/models/tile-action-event';

import {Tile} from 'src/app/types';
import {animate, state, style, transition, trigger,} from '@angular/animations';
import {TileActionName} from 'src/app/enums/tile-action';
import {TileActionComponent} from '../tile-action/tile-action.component';

@Component({
  selector: 'app-fast-cart',
  templateUrl: './fast-cart.component.html',
  styleUrls: ['./fast-cart.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          marginRight: 0,
        })
      ),
      state(
        'closed',
        style({
          marginRight: '-241px',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
    trigger('openCloseMobile', [
      state(
        'openMobile',
        style({
          top: '63px',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          boxShadow: 'none'
        })
      ),
      state(
        'closedMobile',
        style({
          bottom: 0,
        })
      ),
      transition('openMobile => closedMobile', [animate('0.5s')]),
      transition('closedMobile => openMobile', [animate('0.5s')]),
    ]),
  ],
})
export class FastCartComponent implements OnInit, AfterViewInit {
  public icon = icon;
  public tiles: Tile[] = [];
  public isOpen = false;
  public isOpenMobile = false;
  public isClosedCart = true;
  public faHeartBroken = faHeartBroken;

  @ViewChildren(TileActionComponent) tileActions: QueryList<TileActionComponent>;

  enabledActions: TileActionName[] = [
    TileActionName.ADDCART,
    TileActionName.EXTERNAL_LINK,
    TileActionName.SOCIAL_SHARE
  ];

  private timeout;

  constructor(private cartService: CartService, private quickviewService: QuickviewService) {
    // Get Cart content
    this.tiles = this.cartService.tiles.reverse();

    // Subscribe to next cart updates
    this.cartService.cart.subscribe((tiles) => {
      this.tiles = tiles.reverse();
    });

    // Subscribe to next cart last action
    this.cartService.lastAction.subscribe((action) => {
      window.clearTimeout(this.timeout);
      if (action === 'added') {
        this.isOpen = true;
        this.timeout = setTimeout(() => {
          this.isOpen = false;
        }, 2000);
      }
    });

    this.cartService.cartStatus.subscribe((isCartOpened) => {
      if (isCartOpened.isOpen === true) {
        this.isOpen = false;
      }
    });
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  @HostListener('mouseenter', ['$event'])
  checkInside(event: MouseEvent): void {
    this.isOpen = true;
  }

  @HostListener('mouseleave', ['$event'])
  checkOutside(event: MouseEvent): void {
    this.isOpen = false;
  }

  toggle(): void {
    setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 1500);
  }

  toggle_click(): void {
    this.isOpen = !this.isOpen;
  }

  toggleMobile(): void {
    this.isOpenMobile = !this.isOpenMobile;
    this.isClosedCart = !this.isClosedCart;
  }

  openCart(tileId?: string): void {
    if (tileId === undefined) {
      tileId = this.cartService.tiles[0].customID;
    }
    if (tileId) {
      this.cartService.open(tileId);
    }
  }

  see(tile: Tile, e: Event): void {
    e.preventDefault();
    this.quickviewService.open(tile);
  }

  actions(tileID: string, toggle: boolean): void {
    this.tileActions.find(t => t.tile.customID === tileID).show = toggle;
  }

  goto(tile: Tile, e: Event): void {
    e.preventDefault();
    window.open(tile.target, '_blank');
  }

  doAction(tileEvent: TileActionEvent): void {
    console.log(tileEvent);
    switch (tileEvent.action) {
      case TileActionName.ADDCART:
        this.cartService.toggleInCart(tileEvent.tile);
        break;
      case TileActionName.EXTERNAL_LINK:
        this.goto(tileEvent.tile, event);
        break;
      case TileActionName.WATCH:
        this.see(tileEvent.tile, event);
        break;
    }
  }
}
