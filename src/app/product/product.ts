import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Service, Product } from '../service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.html'
})
export class ProductComponent implements OnInit {
  product: Product = { 
    id: '', 
    name: '', 
    category: '', 
    price: null, 
    description: '', 
    quantity: 0, 
    availability: false 
  }

  constructor(private route: ActivatedRoute, private service: Service) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    
      const foundProduct = this.service.getProductById(id);
      if (foundProduct) {
        this.product = foundProduct;
      }
    }
  }

  addToCart(): void {

    let cart = JSON.parse(localStorage.getItem("cart_DB") ?? "[]");
    cart.push(this.product);
    localStorage.setItem("cart_DB", JSON.stringify(cart));
    alert("Termék a kosárban!");
  }
}