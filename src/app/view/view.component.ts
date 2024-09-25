import { Component } from '@angular/core';
import { FormComponent } from '../subcomponents/form/form.component';
import { Pessoa } from '../service/Pessoa';
import { PessoaService } from '../service/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  pessoa: Pessoa = new Pessoa();

  constructor(private router: Router, private route: ActivatedRoute, private pessoaService: PessoaService) {
    let id = this.route.snapshot.paramMap.get('id');

    if(id != null) {
      let pessoaEncontrada = pessoaService.getById(parseInt(id || "0"));

      if(pessoaEncontrada != null) {
        this.pessoa = pessoaEncontrada || null;
      }else throw Error("Pessoa não encontrada!")

    } else throw Error("Id não informado!")
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

  editar(pessoa: Pessoa) {
    let check = this.checkObrigatorios(pessoa, ["username", "email", "senha"]);
    if(check.valido) {
      //this.pessoaService.(pessoa);

      this.navigateTo('/list')
    } else{
      alert("Você não preencheu todos os campos! Campos não preenchidos: " + check.camposNaoPreenchidos.join(", "))
    }
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
