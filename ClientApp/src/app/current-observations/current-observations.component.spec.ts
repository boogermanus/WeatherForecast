import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentObservationsComponent } from './current-observations.component';

describe('CurrentObservationsComponent', () => {
  let component: CurrentObservationsComponent;
  let fixture: ComponentFixture<CurrentObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
