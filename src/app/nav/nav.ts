import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor (public cartService: CartService, public productService: ProductService) {
      }
    is_show: boolean = false;
    toggleMenu():void {
      this.is_show = !this.is_show;
    }
    
}
