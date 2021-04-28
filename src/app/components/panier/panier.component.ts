import { Component, HostListener, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger,} from '@angular/animations';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
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
    ])
  ]
})
export class PanierComponent implements OnInit {
  public isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter', ['$event'])
  checkInside(event: MouseEvent): void {
    this.isOpen = true;
  }

  @HostListener('mouseleave', ['$event'])
  checkOutside(event: MouseEvent): void {
    this.isOpen = false;
  }

  toggle_click(): void {
    this.isOpen = !this.isOpen;
  }

}
