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

  inside = false;
  ngOninit() {
    this.productservice.getProduct().subscribe((data: any) => {
      this.productscart = data;
    });
  }

  addtoCart(item: any) {
    Object.assign(this.singlecard, { quantity: 1 });
    item.total = item.price;
    this.productservice.addtoCart(item);
  }

  // isdisabled(product: any): boolean {
  //   let disabledbutton = false;
  //   this.productservice
  //     .isinsidecart()
  //     .subscribe((insidepro: Productinterface[]) => {
  //       disabledbutton = this.productscart.some((pro) => pro.id === product.id);
  //     });
  //   return disabledbutton;
  // }

  // constructor(private router: Router) {}

  //we can also use a clickevent on the anchor inside the html
  // (click)="onselect(singlecard.id)"
  // onselect(id: number) {
  //   this.router.navigate(['/productdetails', id]);
  // }
}
