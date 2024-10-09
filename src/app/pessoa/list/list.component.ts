import { Component } from '@angular/core';
import { DefaultMethods } from '../../modelos/DefaultMethods';
import { Observable } from 'rxjs';
import { TableComponent } from '../../subcomponents/table/table.component';
import { ButtonModule } from 'primeng/button';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from '../../modelos/pessoa';

@Component({
  selector: 'app-pessoa-list',
  standalone: true,
  imports: [TableComponent, ButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListPessoaComponent extends DefaultMethods {
  lista: Observable<any[]>|null = null;

  typeObjeto: any = Pessoa;

  constructor(private router: Router, private pessoaService: PessoaService) {
    super();

    this.lista = pessoaService.listAll();
  }

  remove(pessoa: Pessoa) {
    this.pessoaService.delete(pessoa.id).subscribe((response:any) => {
      this.lista = this.pessoaService.listAll();
    });

    //location.reload()
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
