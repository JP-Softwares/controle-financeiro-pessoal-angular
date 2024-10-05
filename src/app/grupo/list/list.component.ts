import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultMethods } from '../../modelos/DefaultMethods';
import { TableComponent } from '../../subcomponents/table/table.component';
import { ButtonModule } from 'primeng/button';
import { Grupo } from '../../modelos/grupo';
import { GrupoService } from '../../service/grupo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grupo-list',
  standalone: true,
  imports: [TableComponent, ButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListGrupoComponent extends DefaultMethods {

  lista: Observable<any[]>|null = null;

  typeGrupo: any = Grupo;

  constructor(private router: Router, private grupoService: GrupoService) {
    super();

    this.lista = grupoService.listAll();
  }

  remove(grupo: Grupo) {
    this.grupoService.delete(grupo.id).subscribe((response:any) => {
      this.lista = this.grupoService.listAll();
    });

    //location.reload()
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
