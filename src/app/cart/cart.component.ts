import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartlogicService } from '../services/cartlogic.service';
import { Productinterface } from '../interface/productinterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  product: Array<Productinterface> = [];
  bigtotal!: number;
  constructor(private router: Router, private carddetails: CartlogicService) {}
  ngOnInit() {
    this.carddetails.getProduct().subscribe((productBought) => {
      this.product = productBought;
      console.log(this.product);
    });
    this.bigtotal = this.carddetails.gettoPrice();
  }
  onselect() {
    this.router.navigate(['/productslist']);
  }
  increase(po: any) {
    if (po.quantity < po.stock) {
      po.quantity++;
      po.total = po.quantity * po.price;
    }
    this.bigtotal = this.carddetails.gettoPrice();
  }
  decrease(po: any) {
    if (po.quantity > 0) {
      po.quantity--;
      po.total = po.quantity * po.price;
    }

    this.bigtotal = this.carddetails.gettoPrice();
  }
  removeall() {
    this.carddetails.removeallcart();
    this.product.length = 0;
  }
  remove(product: any) {
    this.carddetails.removeitem(this.product);
  }
}
