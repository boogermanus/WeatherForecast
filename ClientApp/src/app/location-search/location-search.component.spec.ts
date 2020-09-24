import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';
import { MaterialModule } from '../material.module';
import { LocationSearchService } from '../services/location-search.service';
import { RouterTestingModule } from '@angular/router/testing';

import { LocationSearchComponent } from './location-search.component';

describe('LocationSearchComponent', () => {
  let component: LocationSearchComponent;
  let fixture: ComponentFixture<LocationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSearchComponent ],
      imports: [MaterialModule, ReactiveFormsModule, HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [{provide: ActivatedRoute, useValue: {snapshot: {params: {
        office: 'test',
        station: 'test',
        grid: 'test,test',
      }}}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
