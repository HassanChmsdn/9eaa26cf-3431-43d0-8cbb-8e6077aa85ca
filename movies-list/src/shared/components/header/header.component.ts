import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartCountService } from 'src/movies/services/cart-count.service';
import { MovieService } from 'src/movies/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @Output() searchValueChanged = new EventEmitter<string>();
  searchTerm: string = '';




  constructor(private cartCountService: CartCountService, private router: Router, private movieService: MovieService) { }

  cartItemCount: Observable<number> = this.cartCountService.getCartItemCount();

  redirectToAnotherRoute() {
    this.router.navigate(['cart']);
  }

  isCartRoute(): boolean {
    return this.router.url === '/cart';
  }

  

}
