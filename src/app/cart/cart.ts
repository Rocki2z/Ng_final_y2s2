import {  NgFor, NgIf , CurrencyPipe} from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { RouterLink,  } from '@angular/router'; 
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-cart',
  imports: [  NgFor, NgIf, CurrencyPipe , RouterLink, Nav ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {
    
  }
  is_show: boolean = false;
    toggleMenu():void {
      this.is_show = !this.is_show;
    }
}
 