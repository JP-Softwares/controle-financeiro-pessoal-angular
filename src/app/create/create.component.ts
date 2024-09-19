import { Component } from '@angular/core';
import { FormComponent } from '../subcomponents/form/form.component';
import { Pessoa } from '../service/pessoa';
import { PessoaService } from '../service/pessoa.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  pessoa: Pessoa = new Pessoa();

  constructor(private router: Router, private pessoaService: PessoaService) {

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

  criar(pessoa: Pessoa) {
    let check = this.checkObrigatorios(pessoa, ["nome", "email", "cpf", "telefone"]);
    if(check.valido) {
      this.pessoaService.add(pessoa);

      this.pessoa = new Pessoa();

      this.navigateTo('/list')
    } else{
      alert("Você não preencheu todos os campos! Campos não preenchidos: "+ check.camposNaoPreenchidos.join(", "))
    }
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
