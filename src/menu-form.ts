import { Component, Input } from '@angular/core';
import { MenuService } from './menu-service';


@Component({
    selector: 'menu-form',
    templateUrl:'./template-form.html',
    providers: [MenuService]

})

export class Form {
    @Input('item') item;   
    constructor(private menuService:MenuService){}
    list = [];
    categories = [];
    ngOnInit(){
        this.list = this.menuService.getMenuData();
        this.categories = this.menuService.categories;
    }
    onSubmit(){
        this.menuService.addItem({
            "name":this.item.name,
            "description":this.item.description,
            "price":this.item.price,
            "inventory":0,
            "category":this.item.category
        });
        //This sends the data correctly to the mock-data, but other components (notably the menu-category)
        //does not update its display.
   }

}