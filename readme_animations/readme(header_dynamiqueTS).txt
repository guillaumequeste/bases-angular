import { ActivatedRoute } from '@angular/router';
import { PagesService } from './backoffice/services/pages.service';
import { Component, HostBinding, HostListener, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Grid, Tile } from './types';
import { NotificationsService } from './services/notifications.service';
import { ApiService } from './services/api.service';
import { environment } from 'src/environments/environment';
import { QuickviewService } from './services/quickview.service';
import { CartService } from './services/cart.service';
import { ZoomService } from './services/zoom.service';
import { Page } from './backoffice/models/page';
import { FullPage } from './backoffice/models/full-page';
import { map, tap } from 'rxjs/operators';
import { KPI, KPIService } from './backoffice/services/kpi.sevice';
import { interval, Subscription, timer} from 'rxjs';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { NewtileComponent } from './components/newtile/newtile.component';
import { SocialshareService } from './services/socialshare.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public grids: Grid[] = [];
  public max = 1;
  public showShare = false;
  public pages: Page[];
  public selectedPage?: FullPage;
  public menuIsHidden: boolean;
  public KPIData: KPI = new KPI(window.location.hostname);
  public subscription: Subscription;
  public intervalId: number;
  //allows us to count the time passed on this page in sec
  private initialTimeInSec: number;

  @HostBinding('class.fixed') isFixed = false;
  @ViewChildren(NewtileComponent) tilesComponent: QueryList<NewtileComponent>;

  private order = [
    '5f5b5400f6217b00012893a3',
    '5f732c5d0b063c00014863bf',
    '5fde209a56ac5a0001d71471',
    '5fde20bf56ac5a0001d71472',
    '5fde20d056ac5a0001d71473',
    '5fde20ef56ac5a0001d71474',
    '5fde213556ac5a0001d71475'
  ];
  pageId: string;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max) {
      this.max++;
    }
  }

  constructor(
    private notificationsService: NotificationsService,
    private apiService: ApiService,
    private quickviewService: QuickviewService,
    private cartService: CartService,
    private zoomService: ZoomService,
    private pageService: PagesService,
    private kpiService: KPIService,
    private route: ActivatedRoute,
    private socialshareService: SocialshareService,
  ) {
    // this.route.queryParams.subscribe((params) => {
    //   this.pageService.getPages().subscribe((pages: Page[]) => {
    //     this.pages = pages.filter(p => p.isActive === true && !p.deleted);
    //     this.pageId = this.pages[0].customID;
    //     if (params.page) {
    //       this.pageId = this.pages.find(p => p.title === params.page).customID;
    //     }
    //     console.log(this.pageId);
    //     this.changePage(this.pageId);
    //   });
    // });

    this.pageService.getPages().subscribe((pages: Page[]) => {
      this.pages = pages.filter(p => p.isActive === true && !p.deleted);
      this.route.queryParams.subscribe( (param) => {
        this.pageId = this.pages[0].customID;

        if ('page' in param) {
          const finded = this.pages.find(p => p.title === param.page) ;
          if (finded) {
            this.pageId = finded.customID;
          }
        } else if ('page_id') {
          const finded = this.pages.find(p => p.customID === param.page_id) ;
          if (finded) {
            this.pageId = finded.customID;
          }
        }

        this.changePage(this.pageId);
      });

    });

    this.cartService.cartStatus.subscribe((cartStatus) => {
      if (cartStatus.isOpen === true) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    });

    this.quickviewService.tile.subscribe((tile) => {
      if (tile !== null) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    });

    if (environment.production === true) {
      setTimeout(() => {
        this.notificationsService.addNotification({
          texts: [
            `Avez-vous testé toutes les icones sur chaque message ? Faîtes des essais pour voir à quoi elles servent.`,
          ],
          buttons: [
            { text: 'fermer', class: 'chevron', action: 'close' },
          ],
        });
      }, 120 * 1000);
      setTimeout(() => {
        this.notificationsService.addNotification({
          texts: [
            `Avez-vous testé le zoom ? C'est essentiel pour tout voir en 1 clin d'oeil. Choisissez la formule qui vous convient le mieux !`,
          ],
          buttons: [
            { text: `100%`, action: 'changeZoom(100)' },
            { text: `80%`, action: 'changeZoom(80)' },
            { text: `60%`, action: 'changeZoom(60)' },
            { text: `40%`, action: 'changeZoom(40)' },
            { text: `fermer`, class: 'chevron', action: 'close' },
          ],
        });
      }, 5 * 1000);
      setTimeout(() => {
        this.notificationsService.addNotification({
          texts: [
            `Avez-vous choisi votre mode d'affichage ? Essayez pour voir ce qui vous convient le mieux.`,
          ],
          buttons: [
            { text: `one square` },
            { text: `four squares` },
            { text: `nine squares` },
            { text: `full screen` },
            { text: `fermer`, class: 'chevron', action: 'close' },
          ],
        });
      }, 5 * 1000);
    }
  }

  public countClick(): void {
    this.KPIData.nbClick++;
  }

  //allows us to count the time spend on this page (seconds)
  public countTime(): void {
  const startDate = new Date();

  timer(1000, 1000).pipe(map((x: number) => {
    const newDate = new Date(startDate.getTime());
    newDate.setSeconds(newDate.getSeconds() + x);
          return newDate;
        })
      )
      .subscribe(t => {
        if (this.KPIData.timePassed == 0)
          this.initialTimeInSec = t.getTime() / 1000
        this.KPIData.timePassed = t.getTime() / 1000;
      });
  }

  //allows us to send KPI request when user quit page
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
      //save time spent on mediashow
      this.KPIData.timePassed = this.KPIData.timePassed - this.initialTimeInSec;
      //save popInData for the KPI
      this.KPIData.tabOnDisplay = sessionStorage.getItem("isAdBlocked") == "true";
      this.KPIData.popInOkIsDone = sessionStorage.getItem("popInOkIsDone") == "true";
      this.KPIData.popInHowTo = sessionStorage.getItem("popInHowTo") == "true";
      this.KPIData.popInClosed = sessionStorage.getItem("popInClosed") == "true";
      this.KPIData.popInAccessVideo = sessionStorage.getItem("popInAccessVideo") == "true";
      //delete all tmps in sessionStorage
      sessionStorage.removeItem("popInOkIsDone");
      sessionStorage.removeItem("popInHowTo");
      sessionStorage.removeItem("popInClosed");
      sessionStorage.removeItem("popInAccessVideo");
      sessionStorage.removeItem("isAdBlocked");
      this.PushKPIData()
  }

  ngOnInit(): void {
    this.menuIsHidden = true;
    //save kpi isTabOpen (adblock enabled)
    this.countTime();
  }

  async changePage(pageId: string) {
    await this.pageService.getFullPage(pageId).subscribe((fullPage: FullPage) => {
      this.selectedPage = fullPage;

      this.socialshareService.nextMessage({showModal: false, page: this.selectedPage});
    });
  }

  public PushKPIData(): void {
    let KPIObservables: Observable<{[k: string]: any}>[] = [];
    KPIObservables.push(this.kpiService.addKPIData(this.KPIData));
    forkJoin(KPIObservables).subscribe(resp => {},
    err => {
      console.log("Error: ", err);
      alert("Error while pushing KPI data");
    });
  }

  public zoomPlus(): void {
    this.zoomService.zoomPlus();
  }

  public zoomMoins(): void {
    this.zoomService.zoomMoins();
  }
}
