import { Injectable } from '@angular/core';
declare const axios: any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 

    let ng_this = this;

    axios.get('https://fakestoreapi.com/products')
  .then(function (response:any) {
    ng_this.products = response.data;
    console.log(ng_this.products);
  })
  .catch(function (error:any) {
    // handle error
    console.log(error);
  })
  }
  private products : any[] = [];
  
  getProduct():any { 
    return this.products;
  } 
}
