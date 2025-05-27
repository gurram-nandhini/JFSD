import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeSection: 'chefs' | 'dishes' = 'chefs';

  chefs = [
    {
      name: 'Chef Mario Rossi',
      specialty: 'Italian Cuisine Specialist',
      image: 'https://images.unsplash.com/photo-1541544181936-3a0e6e4a2e1a?auto=format&fit=crop&w=80&q=80'
    },
    {
      name: 'Chef Anna Lee',
      specialty: 'Seafood Specialist',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=80&q=80'
    },
    {
      name: 'Chef John Smith',
      specialty: 'Grill Master',
      image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=80&q=80'
    }
  ];

  dishes = [
    {
      name: 'Spaghetti Carbonara',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=80&q=80'
    },
    {
      name: 'Grilled Salmon',
      price: '$18.50',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=80'
    },
    {
      name: 'Filet Mignon',
      price: '$38.00',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=80&q=80'
    }
  ];

  showChefs() {
    this.activeSection = 'chefs';
  }

  showDishes() {
    this.activeSection = 'dishes';
  }
}
