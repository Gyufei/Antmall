import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSearchBarComponent } from './mini-search-bar.component';

describe('MiniSearchBarComponent', () => {
  let component: MiniSearchBarComponent;
  let fixture: ComponentFixture<MiniSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
