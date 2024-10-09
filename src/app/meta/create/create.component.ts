import { Component } from '@angular/core';
import { Meta } from '../../modelos/meta';
import { GrupoService } from '../../service/grupo.service';
import { MetaService } from '../../service/meta.service';
import { Grupo } from '../../modelos/grupo';
import { Router } from '@angular/router';
import { FormComponent } from '../../subcomponents/form/form.component';
import { ButtonModule } from 'primeng/button';
import { DefaultMethods } from '../../modelos/DefaultMethods';

@Component({
  selector: 'app-meta-create',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateMetaComponent extends DefaultMethods {
  meta: Meta = new Meta();

  customProperties: any[] = [];

  constructor(private router: Router, private metaService: MetaService, private grupoService: GrupoService) {
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
      }
    ]
  }

  criar(meta: Meta) {
    let check = this.checkObrigatorios(meta, ["tipo", "valor", "grupo"]);
    if(check.valido) {
      console.log(meta)
      this.metaService.create(meta.toApiObject()).subscribe((meta: Meta) => {
        this.meta = new Meta();

        this.navigateTo('/meta');
      });
    } else{
      alert("Você não preencheu todos os campos! Campos não preenchidos: "+ check.camposNaoPreenchidos.join(", "))
    }
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
