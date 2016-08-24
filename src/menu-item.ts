import { Component, Input } from '@angular/core';
import { MenuService } from './menu-service';

@Component({
    selector: 'item',
    template: `
    <div *ngIf="item.inventory>0 || isAdmin" class="item">
    <span class="item-name">{{item.name}}</span>
    <span class="price-section">
        <span class="item-price">{{item.price | currency:CAN:true }}</span>
        <button *ngIf="!isAdmin" class="buy-button" (click)="buy(item)">Buy</button>
    </span>
    <div class="item-description">{{item.description}}</div>


    <div class="inventory" *ngIf="isAdmin">
        Inventory: 
        <button (click)="decreaseInventory(item)">-</button>
        <span class="item-inventory">{{item.inventory}}</span>
        <button (click)="increaseInventory(item)">+</button>
    </div>

    </div>
    `,
    styles: [`.item {
        padding: 20px 0;
    }
    .price-section {
        float: right;
        }
     .item-name {
        font-size: 20px;
     }
    `],

})

export class Item {
    @Input('item') item;
    @Input('isAdmin') isAdmin:boolean;
    formOpen = false;
    constructor(private menuService:MenuService){};

    buy(item){
        item.inventory--;
    }
    decreaseInventory(item){
        if(item.inventory>0) {
            item.inventory--;
        }
    }
    increaseInventory(item){
        item.inventory++;
    }


}