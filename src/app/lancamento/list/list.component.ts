import { Component } from '@angular/core';
import { DefaultMethods } from '../../modelos/DefaultMethods';
import { Observable } from 'rxjs';
import { LancamentoService } from '../../service/lancamento.service';
import { Router } from '@angular/router';
import { Lancamento } from '../../modelos/lancamento';
import { TableComponent } from '../../subcomponents/table/table.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lancamento-list',
  standalone: true,
  imports: [TableComponent, ButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListLancamentoComponent extends DefaultMethods {

  lista: Observable<any[]>|null = null;

  typeObjeto: any = Lancamento;

  constructor(private router: Router, private lancamentoService: LancamentoService) {
    super();

    this.lista = lancamentoService.listAll();
  }

  remove(lancamento: Lancamento) {
    this.lancamentoService.delete(lancamento.id).subscribe((response:any) => {
      this.lista = this.lancamentoService.listAll();
    });

    //location.reload()
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
