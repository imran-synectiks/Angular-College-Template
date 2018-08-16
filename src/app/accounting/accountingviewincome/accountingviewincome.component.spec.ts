import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingviewincomeComponent } from './accountingviewincome.component';

describe('AccountingviewincomeComponent', () => {
  let component: AccountingviewincomeComponent;
  let fixture: ComponentFixture<AccountingviewincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingviewincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingviewincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
