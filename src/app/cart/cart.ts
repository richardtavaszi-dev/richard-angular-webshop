import { Component, OnInit } from '@angular/core';

class Product {
  id: string = '';
  name: string = '';
  category: string = '';
  price: number = 0;
  description: string = '';
  quantity: number = 0;
  availability: boolean = false;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  cartItems: any[] = [];

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem("cart_DB") ?? "[]");
  }

  removeItem(index: number): void {
  if (confirm("Biztosan törölni szeretnéd a terméket a kosárból?")) {
    
    this.cartItems.splice(index, 1);
    
    localStorage.setItem("cart_DB", JSON.stringify(this.cartItems));
  }
}
}