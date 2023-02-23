import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';

  allItems: MenuItem[] = [
    {
      item: "Chicken Fingers",
      category: "Dinner",
      price: 11.99
    },
    {
      item: "Pizza",
      category: "Dinner",
      price: 11.99
    },
    {
      item: "Wings",
      category: "Side",
      price: 8.99
    },
    {
      item: "Breadsticks",
      category: "Side",
      price: 4.99
    },
    {
      item: "Ceaser Salad",
      category: "Salad",
      price: 3.99
    },
    {
      item: "Cinnamon Roll",
      category: "Dessert",
      price: 7.99
    }
  ];

  getByCategory(Cat: string): MenuItem[] {
    return this.allItems.filter((mi: MenuItem) => 
      mi.category.includes(Cat)  
    );
    console.log(Cat);
    // return result;
  }
}
