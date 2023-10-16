import { Component, Input } from '@angular/core';
import { Productinterface } from '../interface/productinterface';
import { ActivatedRoute } from '@angular/router';
import { CardsApiService } from '../services/cards.api.service';
import { CartlogicService } from '../services/cartlogic.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent {
  product!: any;
  productslist!: Productinterface[];
  productscart!: Array<Productinterface>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardsService: CardsApiService,
    private productservice: CartlogicService
  ) {}
  ngOnInit() {
    this.cardsService
      .GetCard(+this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.product = data;
      });
    this.productservice.getProduct().subscribe((data) => {
      this.productscart = data;
    });
  }
  isinside!: boolean;
  inside!: boolean;
  disabledbutton = false;
  addtocart(item: Productinterface) {
    this.isinside = this.productscart.some((po: any) => po.id == item.id);
    if (!this.disabledbutton && !this.isinside) {
      this.productservice.addtoCart(item);
      this.disabledbutton = true;
    }
    this.disabledbutton = true;
  }
  buy(item: Productinterface) {
    Object.assign(item, { quantity: 1 });
    item.total = item.price;
    this.inside = this.productscart.some((po: any) => po.id == item.id);
    if (!this.isinside) {
      this.productservice.addtoCart(item);
    }
  }
}

// console.log(this.activatedRoute.snapshot.params);

// this.product = this.productslist.find(
//   (prod) => prod.id === +this.activatedRoute.snapshot.params['id']
// );
