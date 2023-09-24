// cart-count.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  getCartItemCount(): Observable<number> {
    return this.cartItemCountSubject.asObservable();
  }

  updateCartItemCount(count: number) {
    this.cartItemCountSubject.next(count);
  }
}
