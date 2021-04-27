<!-- <div class="notifs">
    <div class="notif" *ngFor="let notif of notifications">
        <p *ngFor="let text of notif.texts">{{ text }}</p>
        <button *ngFor="let button of notif.buttons" class="btn" [ngClass]="button.class" (click)="do(notif.id, button.action)">
      {{ button.text }}
    </button>
    </div>
</div> -->

<!-- notif1 -->
<div class="notif_chevron" [ngClass]="isOpen ? 'none' : 'display'" (click)="notif1()">
    <img src="../assets/img/chevron-right-solid 1.svg" alt="chevron_notification">
</div>
<div class="line_notif" [ngClass]="isOpen ? 'display' : 'none'" [@openClose]="isOpen ? 'openline' : 'closedline'"></div>
<div class="notif" [@openClose]="isOpen ? 'open' : 'closed'">
    <div class="message_notif">
        <div class="texte_notif">
            <p>Avez-vous testé toutes les icones sur chaque message ? Faîtes des essais pour voir à quoi elles servent.</p>
        </div>
        <div class="icones">
            <div class="icone">
                <img src="../../../assets/img/Close.svg" alt="close" class="close icon" />
            </div>
            <div class="icone">
                <fa-icon [icon]="faHeart" class="fa-lg icon"></fa-icon>
            </div>
            <div class="icone">
                <fa-icon [icon]="faEye" class="fa-lg icon"></fa-icon>
            </div>
            <div class="icone">
                <fa-icon [icon]="faExternalLinkAlt" class="fa-lg icon"></fa-icon>
            </div>
            <div class="icone">
                <img src="../../../assets/img/Pip.svg" alt="pip" class="icon">
            </div>
        </div>
    </div>
    <div class="chevron" (click)="notif1()">
        <div class="img_chevron">
            <img src="../../../assets/img/chevron-right-solid 1.svg" alt="chevron">
        </div>
    </div>
</div>

<!-- notif2 -->
<div class="notif_chevron chevron2" [ngClass]="isOpen2 ? 'none' : 'display'" (click)="notif2()">
    <img src="../assets/img/chevron-right-solid 1.svg" alt="chevron_notification">
</div>
<div class="line_notif line_notif2" [ngClass]="isOpen2 ? 'display' : 'none'" [@openClose2]="isOpen2 ? 'open2line' : 'closed2line'"></div>
<div class="notif notif2" [@openClose2]="isOpen2 ? 'open2' : 'closed2'">
    <div class="left">
        <div class="message_notif">
            <p>Avez-vous testé le zoom ? C'est essentiel pour tout voir en 1 clin d'oeil. Choisissez la formule qui vous convient le mieux !
            </p>
        </div>
        <div class="zoom">
            <div class="zooms">
                <p (click)="changeZoom(100)">100%</p>
                <p (click)="changeZoom(80)">80%</p>
                <p (click)="changeZoom(60)">60%</p>
                <p (click)="changeZoom(40)">40%</p>
            </div>
        </div>
    </div>
    <div class="chevron" (click)="notif2()">
        <div class="img_chevron">
            <img src="../../../assets/img/chevron-right-solid 1.svg" alt="chevron">
        </div>
    </div>
</div>

<!-- notif3 -->
<div class="notif_chevron chevron3" [ngClass]="isOpen3 ? 'none' : 'display'" (click)="notif3()">
    <img src="../assets/img/chevron-right-solid 1.svg" alt="chevron_notification">
</div>
<div class="line_notif line_notif3" [ngClass]="isOpen3 ? 'display' : 'none'" [@openClose3]="isOpen3 ? 'open3line' : 'closed3line'"></div>
<div class="notif notif3" [@openClose3]="isOpen3 ? 'open3' : 'closed3'">
    <div class="left">
        <div class="message_notif">
            <p>Avez-vous choisi votre mode d'affichage ? Essayez pour voir ce qui vous convient le mieux.
            </p>
        </div>
        <div class="zoom">
            <div class="zooms">
                <div><img src="../../../assets/img/one_square.svg" alt="one_square" (click)="updateLayout(GridLayout.ONESQUARE)"></div>
                <div><img src="../../../assets/img/four_squares.svg" alt="four_squares" (click)="updateLayout(GridLayout.FOURSQUARE)"></div>
                <div><img src="../../../assets/img/nine_squares.svg" alt="nine_squares" (click)="updateLayout(GridLayout.NINESQUARE)"></div>
                <div><img src="../../../assets/img/expand-solid 1.svg" alt="full_screen" (click)="openFullscreen()"></div>
            </div>
        </div>
    </div>
    <div class="chevron" (click)="notif3()">
        <div class="img_chevron">
            <img src="../../../assets/img/chevron-right-solid 1.svg" alt="chevron">
        </div>
    </div>
</div>