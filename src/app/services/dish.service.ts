import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DishService {
  private apiUrl = 'https://api.chefdish.com/dishes'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Get all dishes
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.apiUrl);
  }

  // Get a dish by ID
  getDishById(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${this.apiUrl}/${id}`);
  }

  // Add a new dish
  addDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(this.apiUrl, dish);
  }

  // Update an existing dish
  updateDish(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(`${this.apiUrl}/${dish.id}`, dish);
  }

  // Delete a dish
  deleteDish(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
