import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { MatSidenav } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class LayoutService {
    private sidenav: MatSidenav;


    public setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }

    public open() {
        return this.sidenav.open();
    }


    public close() {
        return this.sidenav.close();
    }

    public toggle(): void {
    this.sidenav.toggle();
   }
}