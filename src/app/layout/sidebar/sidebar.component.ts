import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pmt-sidebar',
    templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    private subscription: Subscription;
    message: any;

    constructor() { }

    ngOnInit() {
       
    }

}