import { Costumer } from './../../../Model/Costumers_model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableReadDataSource, TableReadItem } from './table-read-datasource';
import {ListOfCostumers} from './../../../Constants/general_constants';

@Component({
  selector: 'app-table-read',
  templateUrl: './table-read.component.html',
  styleUrls: ['./table-read.component.css']
})
export class TableReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  costumers:Costumer[]=[]

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name',"email","location","options"];

  constructor() {
    this.costumers=ListOfCostumers;
  }

  ngAfterViewInit(): void {
  }
}
