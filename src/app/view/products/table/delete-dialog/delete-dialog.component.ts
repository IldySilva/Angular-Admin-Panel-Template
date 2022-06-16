import { ProductServicesService } from './../../../../services/product/product-services.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  @Input() product:Product={
    name:""
    
    }
  constructor(private dialog:MatDialog,private route: ActivatedRoute, private productService: ProductServicesService, @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit(): void {
    this.productService.readById(this.data.id!).subscribe(product => {
      this.product = product;
    })
  }
  deleteProduct(){
    this.productService.delete(this.product.id!).subscribe(()=>{
      window.location.reload()
      this.productService.dialogs.showMessage("Sucess Product Removed",false)});
    
    }
}
