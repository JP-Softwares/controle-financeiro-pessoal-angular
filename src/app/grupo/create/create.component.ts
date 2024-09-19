import { Component } from '@angular/core';
import { FormComponent } from '../../subcomponents/form/form.component';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { GrupoService } from '../../service/grupo.service';
import { Grupo } from '../../service/grupo';

@Component({
  selector: 'app-grupo-create',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateGrupoComponent {
  grupo: Grupo = new Grupo();

  constructor(private router: Router, private grupoService: GrupoService) {

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

  criar(grupo: Grupo) {
    let check = this.checkObrigatorios(grupo, ["nome", "descricao"]);
    if(check.valido) {
      this.grupoService.add(grupo);

      this.grupo = new Grupo();

      this.navigateTo('/')
    } else{
      alert("Você não preencheu todos os campos! Campos não preenchidos: "+ check.camposNaoPreenchidos.join(", "))
    }
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
