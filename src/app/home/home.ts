import { Component , OnInit} from '@angular/core';
import { Content } from '../content/content';
import { NgFor } from '@angular/common';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { RouterLink } from '@angular/router';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-home',
  imports: [Content, NgFor, RouterLink, Nav],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    constructor (public cartService: CartService, public productService: ProductService) {
    }

  protected title = 'ClotheShop';

    addToCart(product: any): void {
       this.cartService.addToCart(product);
    } 
      is_show: boolean = false;
    toggleMenu():void {
      this.is_show = !this.is_show;
    }
}    

