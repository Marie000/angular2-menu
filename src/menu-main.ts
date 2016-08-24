import { Component } from '@angular/core';
import { MenuService } from './menu-service';
import { Category } from './menu-category';
import { Form } from './menu-form';

@Component({
    selector: 'menu',
    directives: [Category, Form],
    templateUrl: './template-main.html',
    providers:[MenuService]
})

export class Menu {
    isAdmin = false;
    categories = [];
    formOpen = false;
    constructor(private menuService: MenuService){}
    ngOnInit(){
        this.categories = this.menuService.categories;
    }
    toggleAdmin(bool) {
        this.isAdmin = bool;
        this.formOpen = false;
    }
    showForm(){
        this.formOpen = true;
    }
    ngOnChanges(){
        this.categories = this.menuService.categories;
    }
}