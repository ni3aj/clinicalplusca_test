import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
	{ path: 'customers', component: CustomersComponent },
	{ path: 'orders', component: OrdersComponent },
	{ path: 'customer-details/:id', component: CustomerDetailsComponent },
	{ path: 'order-details/:id', component: OrderDetailsComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
