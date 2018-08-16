import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingviewexpenseComponent } from './accountingviewexpense.component';

describe('AccountingviewexpenseComponent', () => {
  let component: AccountingviewexpenseComponent;
  let fixture: ComponentFixture<AccountingviewexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingviewexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingviewexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
