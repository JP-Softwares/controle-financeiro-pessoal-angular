import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePessoaComponent } from './create/create.component';

const routes: Routes = [
  {path: "", redirectTo: "create", pathMatch: "full"},
  {path: "create", component: CreatePessoaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
