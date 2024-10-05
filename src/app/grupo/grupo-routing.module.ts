import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGrupoComponent } from './create/create.component';
import { ListGrupoComponent } from './list/list.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: ListGrupoComponent},
  {path: "create", component: CreateGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
