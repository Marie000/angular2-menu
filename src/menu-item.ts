import { Component, Input } from '@angular/core';
import { MenuService } from './menu-service';

@Component({
    selector: 'item',
    templateUrl: './template-item.html',
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