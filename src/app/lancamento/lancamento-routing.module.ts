import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLancamentoComponent } from './create/create.component';
import { ListLancamentoComponent } from './list/list.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: ListLancamentoComponent},
  {path: "create", component: CreateLancamentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
