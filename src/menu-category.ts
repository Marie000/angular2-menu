import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from './menu-service';
import { Item } from './menu-item';


@Component({
    selector: 'category',
    directives:[Item],
    template: `
    <h2>{{category}}</h2>
    <div class="category">
    <item *ngFor="let item of displayItems" class="item" [item]="item" [isAdmin]="isAdmin"></item>
    </div>
    `,
    styles: [`.category {
        margin: 20px 30%;
    }
    `],
    providers:[MenuService]
})

export class Category implements OnInit{
    @Input('category') category:string;
    @Input('isAdmin') isAdmin:boolean;
    displayItems =[];
    constructor(private menuService:MenuService){};
    ngOnInit(){
        let items = this.menuService.getMenuData();
        this.displayItems = items.filter((item)=> item.category === this.category)
    }

}