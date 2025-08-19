import { JsonPipe } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { khCurrencyPipe } from '../pipe/currency-pipe';
import { SumPipe } from '../pipe/sum-pipe';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-content',
  imports: [ JsonPipe, khCurrencyPipe, SumPipe, RouterOutlet,RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  @Input() product: any = [];
  @Output() OnAddToCart:any = new EventEmitter<any>();


  addToCart(product: any) {
    console.log('Product added to cart from child:', product);
    this.OnAddToCart.emit(product);
  }
  
}
