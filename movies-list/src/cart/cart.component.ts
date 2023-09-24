// cart.component.ts

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from 'src/movies/models/movie.model';
import { CartService } from 'src/movies/services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cartItems: Movie[] = [];

  constructor(private cartService: CartService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(movie: Movie) {
    this.cartService.removeFromCart(movie);
    this.showSnackbar('Movie removed from cart');
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }
}
