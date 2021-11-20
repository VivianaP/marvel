
import {ViewEncapsulation} from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
    title = 'Marvel';


    constructor() { }

    ngOnInit() {
    }


}