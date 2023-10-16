import { Component, OnInit, Output } from '@angular/core';
import { CartlogicService } from '../services/cartlogic.service';
import { Productinterface } from '../interface/productinterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  product!: Productinterface;
  constructor(private cardadd: CartlogicService) {}
  counter = 0;
  ngOnInit() {
    this.cardadd.getProduct().subscribe((cartno) => {
      this.counter = cartno.length;
      this.product = cartno;
    });
  }
}
