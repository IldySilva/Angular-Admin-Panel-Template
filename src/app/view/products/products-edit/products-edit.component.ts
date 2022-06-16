import { ProductServicesService } from './../../../services/product/product-services.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  productToAdd: Product = {
    name: '',
    price:0,
    supplier:"",
    
  }
  constructor(private router: Router, private location: Location, private productServices: ProductServicesService,) { }

  ngOnInit(): void {
  }
  updateProduct(): void {
    this.productServices.editProduct(this.productToAdd).subscribe(() => {
      this.productServices.dialogs.showMessage("Product Updated",false);
      this.returnToPreviousPage();

    })

  }

  returnToPreviousPage(): void {
    this.location.back();
  }
}
