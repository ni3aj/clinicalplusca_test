import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

	data: any;

	constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.apiService.getOrderDetails(this.activatedRoute.snapshot.params['id']).subscribe((response: any)=>{
			this.data = response.results[0];
		});
	}

}
