import { Component, OnInit } from '@angular/core';
import { Service, Product } from '../service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class List implements OnInit {
  products: Product[] = [];

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  read(): void {
    this.products = this.service.getProducts();
  }

  sortAscending(): void {
    this.products.sort((a, b) => (a.price || 0) - (b.price || 0));
  }

  sortDescending(): void {
    this.products.sort((a, b) => (b.price || 0) - (a.price || 0));
  }

  filterAvailable(): void {
  this.products = this.service.getProducts().filter(p => 
    p.availability && (p.quantity || 0) > 0
  );
}

  addToCart(product: Product): void {
    let cartData = JSON.parse(localStorage.getItem("cart_DB") ?? "[]");
    cartData.push(product);
    localStorage.setItem("cart_DB", JSON.stringify(cartData));
    alert(`${product.name} kosárba került!`);
  }

deleteProduct(id: string): void { 
  const isAdmin = localStorage.getItem("admin_logged") === "true";
  if (!isAdmin) {
    alert("Csak adminisztrátorok törölhetnek! Kérlek, jelentkezz be.");
    return;
  }
  if (confirm("Biztosan törölni szeretnéd?")) {
    this.service.removeProduct(id); 
    this.products = this.service.getProducts();
  }
}
  }
