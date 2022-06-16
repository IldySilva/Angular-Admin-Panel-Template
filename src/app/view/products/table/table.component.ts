import { ProductServicesService } from 'src/app/services/product/product-services.service';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { Product } from 'src/app/Model/product';
import { TableDataSource, TableItem } from './table-datasource';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent  {

  @ViewChild(MatTable) table!: MatTable<TableItem>;

  displayedColumns = ['id', 'name', "price", "supplier","options"];
  products: Product[] = [];

  @Input() product:Product={
    name:""
    
    }
  constructor(private productServices: ProductServicesService,public dialog: MatDialog,private router:Router) {
    this.productServices.readAll().subscribe(prods => {

      this.products = prods
    })
  }

  confirmDelete(){

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: this.product,
      panelClass:"dialogClass"
    });
  }
  editProduct(){
  this.router.navigate(["products/edit/"+this.product.id])
  }
}
