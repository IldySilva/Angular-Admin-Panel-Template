import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductServicesService } from 'src/app/services/product/product-services.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  productToAdd: Product = {
    name: '',
    price:0,
    supplier:"",
    
  }
  constructor(private router: Router, private location: Location, private productServices: ProductServicesService) { }

  ngOnInit(): void {
  }
  saveProduct() {

    this.productServices.create(this.productToAdd).subscribe(prod => {
      this.productToAdd = prod;
      this.productServices.dialogs.showMessage("Producted Saved")

    });
    console.log(this.productToAdd)
  }

  returnToPreviousPage(): void {
    this.location.back();
  }

}
