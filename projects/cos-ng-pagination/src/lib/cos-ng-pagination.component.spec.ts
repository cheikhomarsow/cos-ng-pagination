import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosNgPaginationComponent } from './cos-ng-pagination.component';

describe('CosNgPaginationComponent', () => {
  let component: CosNgPaginationComponent;
  let fixture: ComponentFixture<CosNgPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosNgPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosNgPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
