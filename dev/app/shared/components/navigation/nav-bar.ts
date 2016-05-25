import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import { CueHome } from '../../../pages/home/home';
import { CueDesignSetting } from '../../../pages/design-setting/design-setting';
import { CueAdmin } from '../../../pages/admin/admin';

@Component({
    selector: 'cue-nav',
    //directives: [ROUTER_DIRECTIVES],
    //providers: [ROUTER_PROVIDERS],
    template: `
        <div class="nav-cont">
            <ul>
                <!--
                if we want to use linking a tag, how ever at this time, this does not update the page ,
                it also requires
                    directives: [ROUTER_DIRECTIVES],
                    providers: [ROUTER_PROVIDERS],
                to be added to @Component
                <li><a [routerLink]="['Home']">Home</a></li>
                <li><a [routerLink]="['DesignSetting']">Design Setting</a></li>
                <li><a [routerLink]="['Admin']">Admin</a></li>

                -->

                <!--
                This works and updates the page,no need to have
                directives: [ROUTER_DIRECTIVES],
                providers: [ROUTER_PROVIDERS],
                in @Component, however it requires click function intead of a link -->
                <li (click)="goToPage('Home')">Home</li>
                <li (click)="goToPage('DesignSetting')">Design Setting</li>
                <li (click)="goToPage('Admin')">Admin</li>


            </ul>
        </div>

    `,
    styles:[`
        .nav-cont{
            background-color: yellow;
            }
    `]
})




export class CueNav {


    constructor(private _router: Router) {}

    goToPage(page:any){
        this._router.navigate([page]);
    }


}