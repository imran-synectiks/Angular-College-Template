import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingaddincomeComponent } from './accountingaddincome.component';

describe('AccountingaddincomeComponent', () => {
  let component: AccountingaddincomeComponent;
  let fixture: ComponentFixture<AccountingaddincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingaddincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingaddincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
