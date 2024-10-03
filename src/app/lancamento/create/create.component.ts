import { Component } from '@angular/core';
import { Lancamento } from '../../modelos/lancamento';
import { LancamentoService } from '../../service/lancamento.service';
import { Router } from '@angular/router';
import { GrupoService } from '../../service/grupo.service';
import { Grupo } from '../../modelos/grupo';
import { FormComponent } from '../../subcomponents/form/form.component';
import { ButtonModule } from 'primeng/button';
import { tipoLancamento } from '../../modelos/tipoLancamento';
import { categoriaLancamento } from '../../modelos/categoriaLancamento';
import { DefaultMethods } from '../../modelos/DefaultMethods';

@Component({
  selector: 'app-lancamento-create',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateLancamentoComponent extends DefaultMethods{
  lancamento: Lancamento = new Lancamento();

  customProperties: any[] = [];

  constructor(private router: Router, private lancamentoService: LancamentoService, private grupoService: GrupoService) {
    super();
    this.customProperties = [
      {
        name: "grupo",
        type: "select",
        select: {
          selectItems: grupoService.listAll(),
          typeOfItems: Grupo,
          displayValueFunction: (item: Grupo) => item.nome,
          searchValueFunction: (item: Grupo) => item.nome
        }
      },
      {
        name: "tipo",
        type: "select",
        select: {
          selectItems: Object.keys(tipoLancamento),
          typeOfEnum: tipoLancamento
        }
      },
      {
        name: "categoria",
        type: "select",
        select: {
          selectItems: Object.keys(categoriaLancamento),
          typeOfEnum: categoriaLancamento
        }
      }
    ]
  }

  criar(lancamento: Lancamento) {
    let check = this.checkObrigatorios(lancamento, ["nome", "descricao", "data", "tipo", "valor", "categoria", "grupo"]);
    if(check.valido) {
      this.lancamentoService.create(lancamento.toApiObject()).subscribe((lancamento: Lancamento) => {
        this.lancamento = new Lancamento();

        this.navigateTo('/')
      });
    } else{
      alert("Você não preencheu todos os campos! Campos não preenchidos: "+ check.camposNaoPreenchidos.join(", "))
    }
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
