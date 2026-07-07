import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './list/list';
import { Cart } from './cart/cart';
import { Product } from './service';
import { Create } from './create/create';
import { FormsModule } from '@angular/forms';
FormsModule

const routes: Routes = [

  { path: '', redirectTo: '/list', pathMatch: 'full' }, 
  { path: 'list', component: List },
  { path: 'cart', component: Cart },
  { path: 'product/:id', component: Product },
  { path: 'create', component: Create },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }