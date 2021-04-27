import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {

  public isHidden: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isHidden = true;
  }

  public hide(): void {
    this.isHidden = !this.isHidden;
  }

}
