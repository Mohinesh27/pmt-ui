import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pmt-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent implements OnInit {
    private subscription: Subscription;
    message: any;
    today:Date= new Date();

    constructor() { 
        
    }

    ngOnInit() {
    
    }

}