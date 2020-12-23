Faire un service qui va appliquer différentes classes au clic sur différents composants.

- gridView.service.ts :
    public gridView = 'ninesquares'
    public onesquare(): void {
        this.gridViewService = 'onesquare';
        console.log(this.gridView);
    }
    public foursquares()...
    public ninesquares()...

- navbar.html :
    (click)="onesquare()"
    (click)="foursquares()"
    (click)="ninesquares()"

- navbar.ts :
    import { GridViewService } from 'src/app/services/gridView.service';
    constructor(public gridViewService: GridViewService) {}
    public onesquare(): void {
        this.gridViewService.onesquare();
    }
    public foursquares()...
    public ninesquares()...

- grid.html :
    [ngClass] = "{'onesquare' : gridViewService.gridView === 'onesquare', 
                    'fousquares' : gridViewService.gridView === 'foursquares', 
                    'ninesquares' : gridViewService.griView === 'ninesquares'}"

- grid.ts :
    import { GridViewService } from 'src/app/services/gridView.service';
    import { HostBinding } from '@anguar/core';
    @HostBinding('class') classes = '';
    constructor(private gridViewService: GridViewService) {}

- grid.scss :
    .onesquare {
        padding: 0 calc(100%-800px) 0 calc(100%-800px);
    }
    .foursquares {
        padding: 0 calc(100%-1000px) 0 calc(100%-1000px);
    }