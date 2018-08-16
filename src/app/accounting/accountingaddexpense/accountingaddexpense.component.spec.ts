import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingaddexpenseComponent } from './accountingaddexpense.component';

describe('AccountingaddexpenseComponent', () => {
  let component: AccountingaddexpenseComponent;
  let fixture: ComponentFixture<AccountingaddexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingaddexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingaddexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
