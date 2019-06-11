import { Component, OnInit } from '@angular/core';
import { ProducatsService } from '../producats.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: any;
  constructor(private productService: ProducatsService) {
   this.product = this.productService.product;
   }

  ngOnInit() {
  }

}
