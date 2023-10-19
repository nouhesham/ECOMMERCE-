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
      .subscribe((data: any) => {
        this.product = data;
      });
    this.productservice.getProduct().subscribe((data: any) => {
      this.productscart = data;
    });
  }
  isinside!: boolean;
  inside!: boolean;

  addtocart(item: Productinterface) {
    this.productservice.addtoCart(item);
  }

  isdisabled(product: any): boolean {
    let disabledbutton = false;
    this.productservice
      .isinsidecart()
      .subscribe((insidepro: Productinterface[]) => {
        disabledbutton = this.productscart.some((pro) => pro.id === product.id);
      });
    return disabledbutton;
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
