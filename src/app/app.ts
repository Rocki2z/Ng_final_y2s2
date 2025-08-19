import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { CartService } from './service/cart-service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  constructor(public cartService: CartService) {

  }
}
