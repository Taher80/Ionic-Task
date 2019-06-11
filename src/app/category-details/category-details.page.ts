import { Component, OnInit } from '@angular/core';
import { ProducatsService } from '../producats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {
  products: any[];
  constructor(public productsService: ProducatsService, public router: Router) {
    this.products = this.productsService.category.products;
    console.log(this.products);
  }

  ngOnInit() {
  }
  toProductPage(product: any) {
    this.productsService.product = product;
    this.router.navigateByUrl('product');
  }
}
