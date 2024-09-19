import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { FieldComponent } from '../subcomponents/field/field.component';
import { FormComponent } from '../subcomponents/form/form.component';
import { TableComponent } from '../subcomponents/table/table.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, FieldComponent, FormComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private router: Router) {
    
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
  }
}
