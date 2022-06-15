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


@NgModule({
  declarations: [
    AppComponent,
    SideNavigatorComponent,
    ToolBarComponent,
    BottomBarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,MatListModule,MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatMenuModule, MatButtonModule, LayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
