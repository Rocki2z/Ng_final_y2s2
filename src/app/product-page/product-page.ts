import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { Content} from '../content/content';
import { NgFor } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { Nav } from '../nav/nav';  

@Component({
  selector: 'app-product-page',
  imports: [Content, RouterLink, NgFor, Nav],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {
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
