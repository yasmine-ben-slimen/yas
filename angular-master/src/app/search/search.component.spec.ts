import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAnnoncesComponent } from './search.component';

describe('SearchCustomersComponent', () => {
  let component: SearchAnnoncesComponent;
  let fixture: ComponentFixture<SearchAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
