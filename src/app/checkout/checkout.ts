import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { CartService } from '../service/cart-service';
import { CurrencyPipe, JsonPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [Nav, NgFor, JsonPipe, CurrencyPipe, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  cartItems: any[] = [];
  subtotal: number = 0;
  shipping: number = 15.99;
  tax: number = 0;
  discount: number = 0;
  total: number = 0;
  constructor(public cartService: CartService) {
    
  }
   ngOnInit(): void {
    this.loadCartItems();
  }
  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItem().filter(item => item.is_select);
  }
  removeItem(item: any): void {
    this.cartService.removeItem(item);

    setTimeout(() => {
      this.loadCartItems();

    }, 100);
  }

}
