import { Component } from '@angular/core';
import { MenuService } from './menu-service';
import { Category } from './menu-category';
import { Form } from './menu-form';

@Component({
    selector: 'menu',
    directives: [Category, Form],
    template: `
    <h1>Menu</h1>
    <div class="header-section">
        <button *ngIf="!isAdmin" (click)="toggleAdmin(true)">See admin version</button>
        <button *ngIf="isAdmin" (click)="toggleAdmin(false)">See client version</button><br />
        <p class="note">Admin version: update inventory, add new items</p>
        <p class="note">Client version: see only items in stock, buy items</p>
        <br />
        <button *ngIf="isAdmin" (click)="showForm()">Create a new item</button>
    </div>
    <menu-form *ngIf="formOpen" [item]='{"name":"","price":"","description":""}'>
    
    
</menu-form>
    <category *ngFor="let category of categories" [category]="category" [isAdmin]="isAdmin"></category>

    `,
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