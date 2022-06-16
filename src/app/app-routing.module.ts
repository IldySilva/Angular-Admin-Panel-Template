import { CostumersComponent } from './view/costumers/costumers.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routes: Routes = [

{
  path:"",
  component:HomeComponent
},
{
  path:"dashboard",
  component:DashboardComponent
},

{
  path:"costumers",
  component:CostumersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
