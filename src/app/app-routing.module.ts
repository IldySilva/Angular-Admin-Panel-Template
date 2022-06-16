import { ProductsCreateComponent } from './view/products/products-create/products-create.component';
import { CostumersComponent } from './view/costumers/costumers.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProductsReadComponent } from './view/products/products-read/products-read.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },

  {
    path: "costumers",
    component: CostumersComponent
  },
  {
    path: "products",
    component: ProductsReadComponent
  }, {
    path: "products/create",
    component: ProductsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
