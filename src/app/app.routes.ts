import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MetaModule } from './meta/meta.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { GrupoModule } from './grupo/grupo.module';
import { LancamentoModule } from './lancamento/lancamento.module';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "pessoa", loadChildren: () => PessoaModule},
    {path: "grupo", loadChildren: () => GrupoModule},
    {path: "meta", loadChildren: () => MetaModule},
    {path: "lancamento", loadChildren: () => LancamentoModule},
    {path: "list", component: ListComponent},
    {path: "list/:id", component: ViewComponent},
];