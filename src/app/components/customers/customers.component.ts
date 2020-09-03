import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

	displayedColumns= ["companyName", "contactName", "contactTitle", "phone", "id"];
	dataSource = new MatTableDataSource<CustomerElement>([]);
	search = { value: "" };

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.apiService.getCustomers().subscribe((response: any)=>{
			const ELEMENT_DATA: CustomerElement[] = response.customers;
			this.dataSource = new MatTableDataSource<CustomerElement>(ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}

}

export interface CustomerElement {
  companyName: string;
  contactName: string;
  contactTitle: string;
  phone: number;
  id: number;
}