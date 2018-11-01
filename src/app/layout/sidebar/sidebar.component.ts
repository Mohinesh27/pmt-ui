import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { MatSidenav } from '@angular/material';
import {LayoutService} from '@/services';
@Component({
    selector: 'pmt-sidebar',
    templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    @ViewChild('rightSidenav') public sidenav: MatSidenav;
    private subscription: Subscription;
    message: any;

    constructor(private layoutService:LayoutService) { }

    ngOnInit() {
        this.layoutService.setSidenav(this.sidenav);
    }

}