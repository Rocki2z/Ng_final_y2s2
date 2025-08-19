import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { ProductDetail } from './product-detail/product-detail';
import { Checkout } from './checkout/checkout';
import { ProductPage } from './product-page/product-page';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'cart', 
        component: Cart
    },
    {
        path: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: 'checkout',
        component: Checkout
    },
    {
        path: 'product-page',
        component: ProductPage
    }

];



