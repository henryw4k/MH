import {Component} from '@angular/core';

@Component({
    selector: 'cue-admin',
    template: `<div class="cue-admin"><h2>THIS IS ADMIN PAGE</h2><p>This is admin content</p></div>`,
    styles:[`
        .cue-admin{
            background-color: #85DC8C;
            }
    `]
})

export class CueAdmin {
}