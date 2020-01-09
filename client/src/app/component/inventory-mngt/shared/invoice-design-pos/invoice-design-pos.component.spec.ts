import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDesignPosComponent } from './invoice-design-pos.component';

describe('InvoiceDesignPosComponent', () => {
  let component: InvoiceDesignPosComponent;
  let fixture: ComponentFixture<InvoiceDesignPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDesignPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDesignPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
