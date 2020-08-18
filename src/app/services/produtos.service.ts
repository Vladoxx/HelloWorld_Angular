import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  products: any [];

  constructor() { 
    this.products = [
      'Chocolate',
      'Cafê',
      'Pipoca',
      'Batata frita',
      'Coca cola',
      'Hamburguer',
      'Banana'
    ];
  }

  getProducts(): any {
    return this.products;
  }
}
