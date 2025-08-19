import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart-service';
import { Nav } from '../nav/nav';

declare const axios: any;
declare const $: any;
@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, Nav],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
constructor(public cartService: CartService, private route: ActivatedRoute) {} 
  product: any = {};
  ngOnInit(): void {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');
    let ng_this = this;
    $.LoadingOverlay("show");
    axios.get(`https://fakestoreapi.com/products/${product_id}`)
    .then(function (response:any) {
      ng_this.product = response.data;
      $.LoadingOverlay("hide");
    })
    .catch(function (error:any) {
      console.log(error);
    })
  }
  addToCart(product: any): void {
       this.cartService.addToCart(product);
  } 
}
