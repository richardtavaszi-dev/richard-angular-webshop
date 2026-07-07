import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service, Product } from '../service'; 

@Component({
  selector: 'app-create',
  standalone: false, // 
  templateUrl: './create.html'
})
export class Create implements OnInit {
  username = '';
  password = '';
  isLoggedIn = false;
  showError = false;

  newProduct: Product = {
    id: '',
    name: '',
    category: '',
    price: null as any,   
    description: '',
    quantity: null as any,  
    availability: true
  };

  constructor(private service: Service, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("admin_logged") === "true") {
      this.isLoggedIn = true;
    }
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.isLoggedIn = true;
      localStorage.setItem("admin_logged", "true");
    } else {
      this.showError = true;
    }
  }

  saveProduct(): void {
  if ((this.newProduct.quantity || 0) < 3) {
    alert("Minimális készlet 3 darab!");
    return; 
  }

  if (!this.newProduct.name || !this.newProduct.price) {
    alert("Kérlek töltsd ki az összes mezőt!");
    return;
  }

  this.newProduct.id = crypto.randomUUID(); 
  this.service.addProduct(this.newProduct); 
  this.router.navigate(['/product', this.newProduct.id]); 
}
}