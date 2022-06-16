import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductServicesService } from 'src/app/services/product/product-services.service';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {
  displayedColumns = ['id', 'name', "price", "supplier","options"];
  products: Product[] = [];

  constructor(private productServices: ProductServicesService,private router:Router) {
    this.productServices.readAll().subscribe(prods => {

      this.products = prods
    })

   }

  ngOnInit(): void {
  }
  NavigateToAddNewProduct():void{

    this.router.navigate(["products/create"])
      }
    
}
