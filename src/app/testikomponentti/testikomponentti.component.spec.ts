import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestikomponenttiComponent } from './testikomponentti.component';

describe('TestikomponenttiComponent', () => {
  let component: TestikomponenttiComponent;
  let fixture: ComponentFixture<TestikomponenttiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestikomponenttiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestikomponenttiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
