import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { List } from './list/list';
import { Cart } from './cart/cart';
import { Create } from './create/create';
import { Delete } from './delete/delete';

@NgModule({
  declarations: [
    App,
    List,
    Cart,
    Create,
    Delete,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  bootstrap: [App]
})
export class AppModule { }