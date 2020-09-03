import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    return this.httpClient.get("http://northwind.netcore.io/customers.json");
  }

  getOrders(index) {
    return this.httpClient.get("http://northwind.netcore.io/orders/page/"+index+".json");
  }

  getCustomerDetails(id) {
  	return this.httpClient.get("http://northwind.netcore.io/customers/" + id + ".json");
  }

  getOrderDetails(id) {
  	return this.httpClient.get("http://northwind.netcore.io/query/orders.json?id=" + id);
  }

}
