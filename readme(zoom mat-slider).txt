Faire un service 'zoom' en utilisant mat-slider (material angular)
-> quand on clique sur un bouton, on zoome ou dézoome


Installer 'matrial angular' :
    - ng add @angular/material

Importer dans le fichier ts :
    import { MatSliderModule } from '@angular/material/slider';
    …
    @NgModule ({....
    imports: [...,
    MatSliderModule,
    …]
    })

Dans le fichier 'navbar.component.html' (où il y a mat-slider) :
    <img src="../../../assets/img/minus-circle-solid 1.png" alt="zoom_moins" (click)="zoomMoins()" />
    <mat-slider min="{{zoomService.zoomMin}}" max="{{zoomService.zoomMax}}" step="{{zoomService.zoomStep}}" value="{{zoomService.zoomValue}}" (change)="changeZoom($event)" thumbLabel></mat-slider>
    <img src="../../../assets/img/plus-circle-solid 1.png" alt="zoom_plus" (click)="zoomPlus()" />

Dans le fichier 'navbar.component.ts' (où il y a mat-slider) :
    import { ZoomService } from 'src/app/services/zoom.service';
    export class NavbarComponent implements OnInit {
        constructor(public zoomService: ZoomService) {}
        ngOnInit(): void {}
        public changeZoom(e): void {
            this.zoomService.changeZoom(e.value);
        }

        public zoomPlus(): void {
            this.zoomService.zoomPlus();
        }

        public zoomMoins(): void {
            this.zoomService.zoomMoins();
        }
    }
    
Dans le fichier 'zoom.service.ts' :
    import { Injectable } from '@angular/core';
    import { Subject } from 'rxjs';

    @Injectable({
        providedIn: 'root',
    })
    export class ZoomService {
        public zoom = new Subject<number>();
        public zoomValue = 50;
        public zoomMax = 100;
        public zoomMin = 33;
        public zoomStep = 17;

        constructor() {}

        public changeZoom(value: number): void {
            this.zoomValue = value;
            this.zoom.next(value);
        }

        public zoomPlus(): void {
            if (this.zoomValue < this.zoomMax) {
            this.changeZoom(this.zoomValue + this.zoomStep);
            }
        }

        public zoomMoins(): void {
            if (this.zoomValue > this.zoomMin) {
            this.changeZoom(this.zoomValue - this.zoomStep);
            }
        }
    }