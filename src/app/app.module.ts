import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CartComponent } from './cart/cart.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchvalidatorComponent } from './matchvalidator/matchvalidator.component';
import { MessagesentComponent } from './messagesent/messagesent.component';
import { HttpClientModule } from '@angular/common/http';
import { authGuard } from './guards/auth.guard';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProductsListComponent,
    NotfoundComponent,
    ProductcardComponent,
    ProductdetailsComponent,
    MatchvalidatorComponent,
    MessagesentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
