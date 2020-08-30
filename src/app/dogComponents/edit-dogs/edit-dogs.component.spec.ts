import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDogsComponent } from './edit-dogs.component';

describe('EditDogsComponent', () => {
  let component: EditDogsComponent;
  let fixture: ComponentFixture<EditDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
