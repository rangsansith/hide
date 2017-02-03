import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;

  categories = [
    {name: 'All'},
    {name: 'Bags'},
    {name: 'Totes'},
    {name: 'Accessories'}
  ];

  selectedCategory = 'all';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData().then(snapshot => {
      this.products = snapshot.val().products;
    });
  }

}
