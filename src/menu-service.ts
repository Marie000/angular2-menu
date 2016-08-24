import { Injectable } from '@angular/core';
import { ITEMS } from './mock-data';

@Injectable()

export class MenuService {
    getMenuData(){
        return ITEMS;
    }
    addItem(item){
        ITEMS.push(item);
    }
    test(){
        console.log(ITEMS);
    }
    categories = ["appetizers","main dishes","desserts"]

}