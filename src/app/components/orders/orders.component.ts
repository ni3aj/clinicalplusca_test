import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable, of as observableOf, BehaviorSubject, combineLatest } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

	displayedColumns= ["customerId", "shipCity", "shipName", "shipCountry", "id"];
	dataSource = new MatTableDataSource<OrderElement>([]);
	search = { value: "" };
	currentPage = new BehaviorSubject<number>(1);

	@ViewChild(MatSort) sort: MatSort;

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
    combineLatest(this.currentPage).pipe(
        switchMap(([currentPage]) => {
          return this.apiService.getOrders(currentPage);
        }),
        map(data => {
          return data;
        }),
        catchError((e) => {
          return observableOf([]);
        })
    ).subscribe((res: any) => {
      let x = res.results.map((e) => {
        return {
          customerId: e.order.customerId,
          shipCity: e.order.shipCity,
          shipName: e.order.shipName,
          shipCountry: e.order.shipCountry,
          id: e.order.id
        }
      });
      this.dataSource = new MatTableDataSource<OrderElement>(x);
      this.dataSource.sort = this.sort;
    });
	}

  changePage(number) {
    this.currentPage.next(number);
  }

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
	}

}

export interface OrderElement {
  customerId: string;
  shipCity: string;
  shipName: string;
  shipCountry: string;
  id: number;
}