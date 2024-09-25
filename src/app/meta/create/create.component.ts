import { Component } from '@angular/core';
import { Meta } from '../../service/Meta';
import { GrupoService } from '../../service/grupo.service';
import { MetaService } from '../../service/meta.service';
import { Grupo } from '../../service/Grupo';
import { Router } from '@angular/router';
import { FormComponent } from '../../subcomponents/form/form.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-meta-create',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateMetaComponent {
  meta: Meta = new Meta();

  customProperties: any[] = [];

  constructor(private router: Router, private metaService: MetaService, private grupoService: GrupoService) {
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

  criar(meta: Meta) {
    let check = this.checkObrigatorios(meta, ["nome", "descricao"]);
    if(check.valido) {
      this.metaService.add(meta);

      this.meta = new Meta();

      this.navigateTo('/')
    } else{
      alert("Você não preencheu todos os campos! Campos não preenchidos: "+ check.camposNaoPreenchidos.join(", "))
    }
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
