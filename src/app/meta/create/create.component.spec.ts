import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMetaComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateMetaComponent;
  let fixture: ComponentFixture<CreateMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
