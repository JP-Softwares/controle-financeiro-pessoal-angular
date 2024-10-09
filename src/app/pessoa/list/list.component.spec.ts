import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPessoaComponent } from './list.component';

describe('ListPessoaComponent', () => {
  let component: ListPessoaComponent;
  let fixture: ComponentFixture<ListPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPessoaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
