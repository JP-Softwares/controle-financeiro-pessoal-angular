import { Component } from '@angular/core';
import { FormComponent } from '../../subcomponents/form/form.component';
import { Pessoa } from '../../modelos/pessoa';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { DefaultMethods } from '../../mo../../modelos/DefaultMethods';

@Component({
  selector: 'app-pessoa-create',
  standalone: true,
  imports: [FormComponent, ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreatePessoaComponent extends DefaultMethods {
  pessoa: Pessoa = new Pessoa();

  constructor(private router: Router, private pessoaService: PessoaService) {
    super();
  }

  criar(pessoa: Pessoa) {
    let check = this.checkObrigatorios(pessoa, ["nome", "CPF", "email", "telefone"]);
    if(check.valido) {
      this.pessoaService.create(pessoa.toApiObject()).subscribe((pessoa: Pessoa) => {
        this.pessoa = new Pessoa();

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
