import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MessagesentComponent } from './messagesent/messagesent.component';

import { SharedModule } from './shared/shared.module';
import { CartComponent } from './cart/cart.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'productslist', component: ProductsListComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'productdetails/:id',
    component: ProductdetailsComponent,
    canActivate: [authGuard],
  },
  { path: 'submitdone', component: MessagesentComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
