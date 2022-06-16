import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { TableReadComponent } from './components/costumers/table-read/table-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import{MatInputModule} from "@angular/material/input"
import { MatFormFieldModule } from "@angular/material/form-field";
import { LoadingComponent } from './components/loading/loading.component';

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
    TableReadComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,MatListModule,MatToolbarModule,
     MatIconModule, 
     MatGridListModule, 
     MatCardModule,MatFormFieldModule,
      MatMenuModule,
       MatButtonModule, LayoutModule, MatTableModule, MatPaginatorModule, MatSortModule ,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
