import {Component} from '@angular/core';

@Component({
    selector: 'set-color',
    directives: [],
    providers: [],
    template: `<div class="color-page"><h3>SET COLOR</h3><p>Here you can change the color</p></div>`,
    styles: [`.color-page{ background-color: #DCCA7B;margin:50px; }`]
})

export class SetColor {}