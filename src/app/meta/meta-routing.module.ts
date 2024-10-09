import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMetaComponent } from './create/create.component';
import { ListMetaComponent } from './list/list.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: ListMetaComponent},
  {path: "create", component: CreateMetaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetaRoutingModule { }
