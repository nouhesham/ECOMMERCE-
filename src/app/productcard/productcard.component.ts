import { Component, Input } from '@angular/core';
import { Productinterface } from '../interface/productinterface';
import { Router } from '@angular/router';
import { CartlogicService } from '../services/cartlogic.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent {
  @Input() singlecard!: Productinterface;
  productscart: Array<Productinterface> = [];
  constructor(private productservice: CartlogicService) {}

  ngOninit() {
    this.productservice.getProduct().subscribe((data) => {
      this.productscart = data;
    });
  }
  buttondisabled = false;

  addtoCart(item: any) {
    if (!this.buttondisabled) {
      Object.assign(this.singlecard, { quantity: 1 });
      item.total = item.price;
      const inside = this.productscart.some((po: any) => po.id === item.id);
      if (!this.buttondisabled && !inside) {
        this.productservice.addtoCart(item);
        this.buttondisabled = true;
      }
    }
  }
  // constructor(private router: Router) {}

  //we can also use a clickevent on the anchor inside the html
  // (click)="onselect(singlecard.id)"
  // onselect(id: number) {
  //   this.router.navigate(['/productdetails', id]);
  // }
}
