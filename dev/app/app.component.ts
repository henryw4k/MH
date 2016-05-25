import {Component, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import { CueNav } from './shared/components/navigation/nav-bar';
import { CueHome } from './pages/home/home';
import { CueDesignSetting } from './pages/design-setting/design-setting';
import { CueAdmin } from './pages/admin/admin';


@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: CueHome,
        useAsDefault: true
    },
    {
        path: '/designsetting/...',
        name: 'DesignSetting',
        component: CueDesignSetting
    },
    {
        path: '/admin',
        name: 'Admin',
        component: CueAdmin
    }
])


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES,CueNav],
    providers: [ROUTER_PROVIDERS],
    template: `
        <h1>MHH</h1>
        <cue-nav></cue-nav>
        <router-outlet></router-outlet>
    `
})







export class AppComponent implements OnInit{



    /*ngOnInit() {
        this.router.navigate(['/home']);
    }*/

}
