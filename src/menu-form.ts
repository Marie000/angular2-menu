import { Component, Input } from '@angular/core';
import { MenuService } from './menu-service';
import { ITEMS } from './mock-data';


@Component({
    selector: 'menu-form',
    template: `
        <form (submit)="onSubmit()">
        <div class="form-item">
            <label>Item name: </label><input type="text" [(ngModel)]="item.name" /><br />
        </div>
        <div class="form-item">
            <label>Price: </label><input type="text" [(ngModel)]="item.price" /><br />
        </div>
        <div class="form-item">        
            <label>Description: </label><textarea [(ngModel)]="item.description" ></textarea><br />
         </div>
         <div class="form-item">
            <label>Category: </label> 
                <select id="category" [(ngModel)]="item.category" name="category"  >
          <option *ngFor="let category of categories" [value]="category">{{category}}</option>
        </select>
        </div>
        <input type="submit" value="submit" />
        </form>
        <ul>
                <li *ngFor="let item of list">{{item.name}}</li>
                </ul>

    `,
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
        console.log(ITEMS);
   }

}