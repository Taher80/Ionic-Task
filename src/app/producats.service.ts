import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProducatsService {
  privateCategory: any;
  privateProduct: any;
  constructor() { }

  set category(data) {
    this.privateCategory = data;
  }
  get category(): any {
    return this.privateCategory;
  }

  set product(data) {
    this.privateProduct = data;
  }
  get product(): any {
    return this.privateProduct;
  }
}
