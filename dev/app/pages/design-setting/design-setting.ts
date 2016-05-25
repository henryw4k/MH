import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import {SetLogo} from './set-logo/set-logo';
import {SetColor} from './set-color/set-color';


@Component({
    selector: 'cue-design-setting',
    directives: [ROUTER_DIRECTIVES, SetColor,SetLogo],
    providers: [ROUTER_PROVIDERS],
    template: `
        <div class="cue-design-setting">
            <h2>THIS IS DESIGN SETTING PAGE</h2>
            <p>This is design setting content</p>
            <ul>
                <li><a [routerLink]="['SetColor']">Design Setting</a></li>
                <li><a [routerLink]="['SetLogo']">Admin</a></li>
            </ul>
            <br>
            <router-outlet></router-outlet>
        </div>`,
    styles:[`
        .cue-design-setting{
            background-color: #039be5;
            }
    `]
})


@RouteConfig([
    {
        path: '/set-color',
        name: 'SetColor',
        component: SetColor,
        useAsDefault: true
    {
        path: '/set-logo/',
        name: 'SetLogo',
        component: SetLogo
    }
])


export class CueDesignSetting {
}