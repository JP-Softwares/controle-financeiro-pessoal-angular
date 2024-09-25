import { Component } from '@angular/core';
import { Lancamento } from '../../service/lancamento';
import { LancamentoService } from '../../service/lancamento.service';
import { Router } from '@angular/router';
import { GrupoService } from '../../service/grupo.service';
import { Grupo } from '../../service/grupo';
import { FormComponent } from '../../subcomponents/form/form.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lancamento-create',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateLancamentoComponent {
  lancamento: Lancamento = new Lancamento();

  customProperties: any[] = [];

  constructor(private router: Router, private lancamentoService: LancamentoService, private grupoService: GrupoService) {
    this.customProperties = [
      {
        name: "grupo",
        type: "select",
        select: {
          selectItems: grupoService.listAll(),
          displayValueFunction: (item: Grupo) => item.nome,
          searchValueFunction: (item: Grupo) => item.nome
        }
      }
    ]
  }

  checkObrigatorios(objeto:any, propriedades: string[]): {valido: boolean, camposNaoPreenchidos: string[]} {
    let valido = true;

    let camposNaoPreenchidos = []

    for(let propriedade of propriedades) {
      if((objeto[propriedade] + "") == "") {
        valido = false;
        camposNaoPreenchidos.push(propriedade)
      }
    }

    return {valido: valido, camposNaoPreenchidos: camposNaoPreenchidos};
  }

  criar(lancamento: Lancamento) {
    let check = this.checkObrigatorios(lancamento, ["nome", "descricao"]);
    if(check.valido) {
      this.lancamentoService.add(lancamento);

      this.lancamento = new Lancamento();

      this.navigateTo('/')
    } else{
      alert("Você não preencheu todos os campos! Campos não preenchidos: "+ check.camposNaoPreenchidos.join(", "))
    }
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
