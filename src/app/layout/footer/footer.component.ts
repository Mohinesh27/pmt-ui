import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

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