import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1ContainerComponent } from './f1-container.component';

describe('F1ContainerComponent', () => {
  let component: F1ContainerComponent;
  let fixture: ComponentFixture<F1ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1ContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F1ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
