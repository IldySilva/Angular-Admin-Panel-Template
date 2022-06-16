import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-pop-menu-button',
  templateUrl: './pop-menu-button.component.html',
  styleUrls: ['./pop-menu-button.component.css']
})
export class PopMenuButtonComponent implements OnInit {
  @Input() product:Product={
    name:""
    
    }
  constructor(public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
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
