import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMdoscuroComponent } from './btn-mdoscuro.component';

describe('BtnMdoscuroComponent', () => {
  let component: BtnMdoscuroComponent;
  let fixture: ComponentFixture<BtnMdoscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnMdoscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnMdoscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
