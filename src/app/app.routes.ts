import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CreatePessoaComponent } from './pessoa/create/create.component';
import { CreateGrupoComponent } from './grupo/create/create.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "pessoa/create", component: CreatePessoaComponent},
    {path: "grupo/create", component: CreateGrupoComponent},
    {path: "create", component: CreateComponent},
    {path: "list", component: ListComponent},
    {path: "list/:id", component: ViewComponent},
];