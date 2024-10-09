import { Component } from '@angular/core';
import { DefaultMethods } from '../../modelos/DefaultMethods';
import { TableComponent } from '../../subcomponents/table/table.component';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { MetaService } from '../../service/meta.service';
import { Router } from '@angular/router';
import { Meta } from '../../modelos/meta';

@Component({
  selector: 'app-meta-list',
  standalone: true,
  imports: [TableComponent, ButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListMetaComponent extends DefaultMethods {

  lista: Observable<any[]>|null = null;

  typeObjeto: any = Meta;

  constructor(private router: Router, private metaService: MetaService) {
    super();

    this.lista = metaService.listAll();
  }

  remove(meta: Meta) {
    this.metaService.delete(meta.id).subscribe((response:any) => {
      this.lista = this.metaService.listAll();
    });

    //location.reload()
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
