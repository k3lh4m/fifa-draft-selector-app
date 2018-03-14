import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public imgSrc: string;
    constructor() {
    }

    ngOnInit() {
        this.imgSrc = '/assets/test.jpeg'
    }
}
