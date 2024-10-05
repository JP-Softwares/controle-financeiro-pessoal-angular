import { Component } from '@angular/core';
import { FormComponent } from '../../subcomponents/form/form.component';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { GrupoService } from '../../service/grupo.service';
import { Grupo } from '../../modelos/grupo';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../modelos/pessoa';
import { DefaultMethods } from '../../modelos/DefaultMethods';

@Component({
  selector: 'app-grupo-create',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateGrupoComponent extends DefaultMethods {
  grupo: Grupo = new Grupo();

  customProperties: any[] = [];

  constructor(private router: Router, private grupoService: GrupoService, private pessoaService: PessoaService) {
    super();
    this.customProperties = [
      {
        name: "pessoa",
        type: "select",
        select: {
          selectItems: pessoaService.listAll(),
          typeOfItems: Pessoa,
          displayValueFunction: (item: Pessoa) => item.nome,
          searchValueFunction: (item: Pessoa) => item.nome
        }
      }
    ]
    /*
    pessoaService.listAll().subscribe((pessoas: Pessoa[]) => {
      this.customProperties.find((item) => item.name == "pessoa").select.selectItems = pessoas;

      console.log(pessoas);
    });*/
  }

  criar(grupo: Grupo) {
    let check = this.checkObrigatorios(grupo, ["nome", "descricao", "pessoa"]);
    if(check.valido) {
      this.grupoService.create(grupo.toApiObject()).subscribe((grupo: any) => {
        this.grupo = new Grupo();

        console.log("criado")

        this.navigateTo('/grupo')
      });
    } else{
      alert("Você não preencheu todos os campos! Campos não preenchidos: "+ check.camposNaoPreenchidos.join(", "))
    }
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
