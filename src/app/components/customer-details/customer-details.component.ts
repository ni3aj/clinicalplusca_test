import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})

export class CustomerDetailsComponent implements OnInit {

	data: any;

	constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.apiService.getCustomerDetails(this.activatedRoute.snapshot.params['id']).subscribe((response: any)=>{
			this.data = response;
		});
	}

}
