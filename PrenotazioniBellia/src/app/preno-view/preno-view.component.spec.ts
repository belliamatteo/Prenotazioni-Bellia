import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenoViewComponent } from './preno-view.component';

describe('PrenoViewComponent', () => {
  let component: PrenoViewComponent;
  let fixture: ComponentFixture<PrenoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
