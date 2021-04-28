<div class="fast-cart no-tile-menu" [@openClose]="isOpen ? 'open' : 'closed'">
    <!-- languette du carousel -->
    <div class="edge">
        <button class="btn btn-icon" (click)="toggle_click()">
      <fa-icon [icon]="icon" class="fa-2x"></fa-icon>
      <span>{{ tiles.length }}</span>
    </button>
    </div>

    <!-- on agrandit le petit panier afin qu'une partie soit sur la droite de la page non visible pour l'utilisateur et on applique HostListener (mouseenter et mouseleave) dessus -->
    <div class="mouseOver"></div>

    <!-- petit panier -->
    <div class="container">
        <div class="liste">
            <h5>Ma liste de lecture</h5>
            <hr>
        </div>
        <div class="content">
            <ng-container *ngIf="tiles.length > 0">
                <!-- <app-tile [lockSize]="true" [tile]="tile" *ngFor="let tile of tiles" (click)="openCart(tile.id)" [context]="'fastcart'"></app-tile> -->
                <div *ngFor="let tile of tiles" class="thumb-tiles">
                    <app-newtile (mouseenter)="actions(tile.customID, true)" (mouseleave)="actions(tile.customID, false)" [tile]="tile" [lockSize]="150" (click)="openCart(tile.customID)"></app-newtile>
                    <app-tile-action [inCart]="true" [enabledActions]="enabledActions" [tile]="tile" [zoom]="60" (action)="doAction($event)"></app-tile-action>
                </div>
            </ng-container>
            <ng-container *ngIf="tiles.length === 0">
                <p>Vous n'avez pas encore de favoris</p>
                <p>
                    <fa-icon [icon]="faHeartBroken" class="fa-lg"></fa-icon>
                </p>
            </ng-container>
        </div>
        <div class="ouvrir">
            <button *ngIf="tiles.length > 0" (click)="openCart(tileId)"> Ouvrir ma liste</button>
        </div>
    </div>
</div>

<!-- fermer petit panier version mobile -->
<div class="closedCart" [ngClass]="isClosedCart ? 'none' : 'display'">
    <button class="btn btn-icon btn-close" (click)="toggleMobile()">
    Fermer ma liste
    <img src="../../../assets/img/close_button.svg" alt="close_button">
  </button>
</div>

<!-- petit panier version mobile -->
<div class="cart" [@openCloseMobile]="isOpenMobile ? 'openMobile' : 'closedMobile'">
    <div class="div_cart">
        <button class="btn btn-icon" (click)="toggleMobile()">
      <fa-icon [icon]="icon" class="fa-4x"></fa-icon>
      <span>{{ tiles.length }}</span>
    </button>
    </div>
    <div class="containerMobile">
        <h5>Ma liste de lecture</h5>
        <hr>
        <div class="cartMobile">
            <ng-container *ngIf="tiles.length > 0">
                <!-- <app-tile [lockSize]="false" [tile]="tile" *ngFor="let tile of tiles" (click)="see(tile, $event)"></app-tile> -->
                <div *ngFor="let tile of tiles" class="thumb-tiles">
                    <app-newtile (mouseenter)="actions(tile.customID, true)" (mouseleave)="actions(tile.customID, false)" [tile]="tile" [lockSize]="150" (click)="openCart(tile.customID)"></app-newtile>
                    <app-tile-action [inCart]="true" [enabledActions]="enabledActions" [tile]="tile" [zoom]="60" (action)="doAction($event)"></app-tile-action>
                </div>
            </ng-container>
        </div>
    </div>
</div>
