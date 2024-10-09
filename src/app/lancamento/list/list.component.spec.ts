import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLancamentoComponent } from './list.component';

describe('ListLancamentoComponent', () => {
  let component: ListLancamentoComponent;
  let fixture: ComponentFixture<ListLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLancamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
