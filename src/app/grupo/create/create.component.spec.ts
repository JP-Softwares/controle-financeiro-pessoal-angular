import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrupoComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateGrupoComponent;
  let fixture: ComponentFixture<CreateGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGrupoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
