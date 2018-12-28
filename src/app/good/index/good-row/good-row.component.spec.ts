import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodRowComponent } from './good-row.component';

describe('GoodRowComponent', () => {
  let component: GoodRowComponent;
  let fixture: ComponentFixture<GoodRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
