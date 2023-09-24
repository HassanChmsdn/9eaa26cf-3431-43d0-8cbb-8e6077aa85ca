// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems: Movie[] = [];
    private cartSubject = new BehaviorSubject<Movie[]>(this.cartItems);

    constructor() {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            this.cartItems = JSON.parse(storedCartItems);
            this.cartSubject.next(this.cartItems);
        }
    }

    getCartItems(): Observable<Movie[]> {
        return this.cartSubject.asObservable();
    }

    addToCart(movie: Movie) {
        if (!this.cartItems.find(item => item._id === movie._id)) {
            this.cartItems.push(movie);
            this.cartSubject.next([...this.cartItems]);

            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

        }

    }

    removeFromCart(movie: Movie): void {
        const index = this.cartItems.findIndex(item => item._id === movie._id);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
            this.cartSubject.next(this.cartItems);

            // Update the localStorage to reflect the removed item
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        }
    }
}
