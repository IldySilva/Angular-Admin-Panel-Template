import { TableComponent } from './view/products/table/table.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogActions, MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigatorComponent } from './components/side-navigator/side-navigator.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule  } from "@angular/material/icon";
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { LogoComponent } from './components/logo/logo.component';
import { CostumersComponent } from './view/costumers/costumers.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import{MatInputModule} from "@angular/material/input"
import { MatFormFieldModule } from "@angular/material/form-field";
import { LoadingComponent } from './components/loading/loading.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule, ProgressSpinnerMode } from "@angular/material/progress-spinner";
import { InputErrorComponent } from './components/input-error/input-error.component';
import { ProductsReadComponent } from './view/products/products-read/products-read.component';
import { MatMenu } from "@angular/material/menu";
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from "@angular/common/http";
import { ProductsCreateComponent } from './view/products/products-create/products-create.component';
import { ProductsEditComponent } from './view/products/products-edit/products-edit.component';
import { PopMenuButtonComponent } from './view/products/products-create/pop-menu-button/pop-menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigatorComponent,
    ToolBarComponent,
    BottomBarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    LogoComponent,
    CostumersComponent,
    LoadingComponent,
    InputErrorComponent,
    ProductsReadComponent,
    TableComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
    PopMenuButtonComponent,
  
  
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,MatListModule,MatToolbarModule,
     MatIconModule, 
     MatGridListModule, 
     MatCardModule,
     MatFormFieldModule,
 
       MatButtonModule,
        LayoutModule, 
        MatTableModule,
         MatPaginatorModule,
          MatSortModule ,
          MatInputModule,
          MatProgressSpinnerModule,
          MatSnackBarModule,HttpClientModule
          ,MatMenuModule, MatDialogModule ,FormsModule,
         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
