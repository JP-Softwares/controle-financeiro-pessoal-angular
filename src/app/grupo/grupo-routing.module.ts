import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGrupoComponent } from './create/create.component';

const routes: Routes = [
  {path: "", redirectTo: "create", pathMatch: "full"},
  {path: "create", component: CreateGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
