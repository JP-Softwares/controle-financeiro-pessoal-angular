import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMetaComponent } from './list.component';

describe('ListMetaComponent', () => {
  let component: ListMetaComponent;
  let fixture: ComponentFixture<ListMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
