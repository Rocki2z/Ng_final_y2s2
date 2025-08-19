import { Injectable } from '@angular/core';
declare const Swal: any;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    let cart = localStorage.getItem('cart_item') ?? '[]';
        this.cart_item = JSON.parse(cart);
   }
  private cart_item: any[] = [];

  addToCart(product: any): void {
    let dpl_index = this.cart_item.findIndex(x => x.id === product.id);
    if (dpl_index > -1) {
      this.cart_item[dpl_index].quantity += 1;
    } else {
      product.quantity = 1; // Initialize quantity to 1
      product.is_select = false ; 
      this.cart_item.push(product);
    }
    localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
  }
  
    increaseQuantity(item: any) {
    let index = this.cart_item.findIndex(X => X.id === item.id);
    if (index !== -1) {
      if (!this.cart_item[index].quantity) {
        this.cart_item[index].quantity = 1;
      }
      this.cart_item[index].quantity++;
      localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
    }
  }

  decreaseQuantity(item: any) {
    let index = this.cart_item.findIndex(x => x.id === item.id);
    if (index !== -1 && this.cart_item[index].quantity > 1) {
      this.cart_item[index].quantity--;
      localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
    }
  }

  removeItem(item:any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result:any) => {
      if (result.isConfirmed) {
        let index = this.cart_item.findIndex(x => x.id === item.id);
        this.cart_item.splice(index, 1);
        localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
      }
    });
  }

  getCartTotal () {
    let total = 0;
    this.cart_item.forEach(x => {
      if (x.is_select) {
        total += x.price * x.quantity;

      }
    });
    return total;
  }

  selectCartItem(item: any) {
    let index = this.cart_item.findIndex(X => X.id === item.id);
    this.cart_item[index].is_select = !this.cart_item[index].is_select;
    localStorage.setItem('cart_item', JSON.stringify(this.cart_item));
    
  }

  getCartItem () {
    return this.cart_item;
  }
}
