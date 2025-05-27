export interface Dish {
    id: number;            // Unique identifier for the dish
  name: string;          // Name of the dish
  description: string;   // Description of the dish
  price: number;         // Price of the dish
  imageUrl?: string;     // Optional URL for the dish image
  category?: string;     // Optional category like 'Appetizer', 'Main Course', etc.
  isAvailable?: boolean; // Optional availability status
}
