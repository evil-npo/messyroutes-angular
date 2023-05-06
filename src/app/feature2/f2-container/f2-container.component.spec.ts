import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F2ContainerComponent } from './f2-container.component';

describe('F2ContainerComponent', () => {
  let component: F2ContainerComponent;
  let fixture: ComponentFixture<F2ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F2ContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F2ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
