
import {ViewEncapsulation} from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ComponentsComponent {
    title = 'Marvel';


    constructor() { }

    ngOnInit() {
    }


}
