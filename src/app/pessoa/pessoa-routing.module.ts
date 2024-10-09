import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePessoaComponent } from './create/create.component';
import { ListPessoaComponent } from './list/list.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: ListPessoaComponent},
  {path: "create", component: CreatePessoaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
