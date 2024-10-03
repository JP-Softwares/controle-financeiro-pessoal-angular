import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldComponent } from '../subcomponents/field/field.component';
import { FormComponent } from '../subcomponents/form/form.component';
import { TableComponent } from '../subcomponents/table/table.component';
import { Router } from '@angular/router';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../modelos/pessoa';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, FieldComponent, FormComponent, TableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  pessoas: Pessoa[] = [];

  constructor(private router: Router, private pessoaService: PessoaService) {
    this.listar()
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }

  listar() {
    this.pessoaService.listAll().subscribe((pessoas) => this.pessoas = pessoas);
  }

  excluir(pessoa: Pessoa) {
    this.pessoaService.delete(pessoa.id);

    this.listar()

    console.log(this.pessoas)
  }

  editar(pessoa: Pessoa) {
    this.navigateTo('list/' + pessoa.id)
  }
}
