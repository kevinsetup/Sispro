import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblematicaBeneficiarioComponent } from './problematica-beneficiario.component';

describe('ProblematicaBeneficiarioComponent', () => {
  let component: ProblematicaBeneficiarioComponent;
  let fixture: ComponentFixture<ProblematicaBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblematicaBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblematicaBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
