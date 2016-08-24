import { bootstrap } from "@angular/platform-browser-dynamic";
import  { Component } from '@angular/core';
import { MenuService } from './menu-service';
import { Menu } from './menu-main';


@Component({
    selector:'app',
    template:'<menu>loading...</menu>',
    directives: [Menu],
    providers: [MenuService]
})

class App {}

bootstrap(App,[MenuService]);