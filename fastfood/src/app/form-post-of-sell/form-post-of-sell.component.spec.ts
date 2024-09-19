import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostOfSellComponent } from './form-post-of-sell.component';

describe('FormPostOfSellComponent', () => {
  let component: FormPostOfSellComponent;
  let fixture: ComponentFixture<FormPostOfSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPostOfSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostOfSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
