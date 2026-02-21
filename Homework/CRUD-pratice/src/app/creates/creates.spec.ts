import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creates } from './creates';

describe('Creates', () => {
  let component: Creates;
  let fixture: ComponentFixture<Creates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
