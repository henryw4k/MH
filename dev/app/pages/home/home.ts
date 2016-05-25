import {Component} from '@angular/core';

@Component({
    selector: 'cue-home',
    template: `<div class="cue-home"><h2>THIS IS HOME PAGE</h2><p>This is homepage content</p></div>`,
    styles:[`
        .cue-home{
            background-color: pink;
            }
    `]
})

export class CueHome {
}