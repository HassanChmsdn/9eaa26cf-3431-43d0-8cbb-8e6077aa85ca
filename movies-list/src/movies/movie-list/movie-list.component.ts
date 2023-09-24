import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';
import { CartService } from '../services/cart.service';
import { CartCountService } from '../services/cart-count.service';
import { Router } from '@angular/router';
import { MovieSelectionService } from '../services/movie-selection.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass'],

})
export class MovieListComponent implements OnInit {

  currentBannerDate: string = '';
  dateIndicatorVisible: boolean = false;
  cartItemCount: number = 0;
  // movies: Movie[] = [];

  filteredMovies: Movie[] = [];
  searchTerm: string = '';
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private cartService: CartService, private cartCountService: CartCountService, private movieSelectionService: MovieSelectionService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      // this.movies = movies;
      this.cartService.getCartItems().subscribe(cartItems => {
        this.movies = movies.filter(movie => !this.isMovieInCart(movie, cartItems)
        );
        this.filterMovies();
      });

      // Sort the movies by date in ascending order
      this.movies.sort((a, b) => {
        const dateA: Date = new Date(a.date);
        const dateB: Date = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });

      window.addEventListener('scroll', () => {
        this.checkDateIndicatorVisibility();
        // console.log("inside oninit")
      });

      this.checkDateIndicatorVisibility();
      this.updateBannerDate();
      // console.log("after", this.currentBannerDate);

    });

    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
      this.cartCountService.updateCartItemCount(this.cartItemCount);

    });

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.updateBannerDate();
  }

  private checkDateIndicatorVisibility(): void {
    const dateIndicator = document.getElementById('dateIndicator');
    if (dateIndicator) {
      const rect = dateIndicator.getBoundingClientRect();
      this.dateIndicatorVisible = rect.bottom >= 0;
    }
  }

  private updateBannerDate(): void {
    // console.log("inside");

    const movieElements = document.querySelectorAll('[movie-date]');
    // console.log("inside2", movieElements);

    for (let i = 0; i < movieElements.length; i++) {
      const movieElement = movieElements[i];
      const movieDate = movieElement.getAttribute('movie-date') ?? '';
      const rect = movieElement.getBoundingClientRect();

      if (movieDate && movieDate !== '') {
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          this.currentBannerDate = movieDate;
          break;
        }
      }
    }
  }

  addToCart(movie: Movie) {
    this.cartService.addToCart(movie);
    this.movies = this.movies.filter(item => item._id !== movie._id);
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
      this.cartCountService.updateCartItemCount(this.cartItemCount);
    });
  }

  isMovieInCart(movie: Movie, cartItems: Movie[]): boolean {
    return cartItems.some(item => item._id === movie._id);
  }

  filterMovies(): void {
    if (this.searchTerm) {
      this.filteredMovies = this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredMovies = this.movies;
    }
  }
  onMovieClick(movie: Movie) {
    this.movieSelectionService.setSelectedMovie(movie);
  }

}
