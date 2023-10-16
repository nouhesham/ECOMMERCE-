import { Component, OnInit, Output, Input } from '@angular/core';

import { Productinterface } from '../interface/productinterface';
import { CardsApiService } from '../services/cards.api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  productslist!: Productinterface[];
  constructor(private cardsServices: CardsApiService) {}
  ngOnInit() {
    this.cardsServices.GetCards().subscribe((data) => {
      this.productslist = data.products;
    });
  }
}
