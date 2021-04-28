<div (click)="countClick()">
    <app-cookies></app-cookies>
    <app-popin></app-popin>
    <app-fast-cart></app-fast-cart>
    <app-quickview></app-quickview>
    <app-cart></app-cart>
    <app-feedback></app-feedback>
    <app-navbar></app-navbar>
    <app-notifications></app-notifications>
    <app-socialshare></app-socialshare>
    <!-- <app-video></app-video> -->



    <div class="grids">
        <!-- boutons zoom en bas à gauche de l'écran -->
        <div class="zooms">
            <div class="zoom_in" (click)="zoomPlus()">
                <img src="../assets/img/search-plus-solid 1.svg" alt="zoom_in" class="img_zoom_in" />
            </div>
            <div class="zoom_out" (click)="zoomMoins()">
                <img src="../assets/img/search-minus-solid 1.svg" alt="zoom_out" class="img_zoom_out" />
            </div>
        </div>

        <div class="menu">
            <div class="openMenu" (click)="menuIsHidden = !menuIsHidden"></div>
            <div *ngIf="pages" class="pages" [ngClass]="{'hidden': menuIsHidden}">
                <a href="javascript:void(0);" [ngClass]="{'selected':(selectedPage ? selectedPage.customID === page.customID : false)}" (click)="changePage(page.customID)" *ngFor="let page of pages">{{page.title}}</a>
            </div>
        </div>

        <div *ngIf="selectedPage" class="waves">
            <ng-container *ngFor="let wave of selectedPage.waves; let i = index">
                <app-grid [index]="selectedPage.waves.length - i" [wave]="wave" *ngIf="i < max"></app-grid>
            </ng-container>
        </div>
    </div>
</div>

<router-outlet></router-outlet>
