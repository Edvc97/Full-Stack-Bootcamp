import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersModels } from './users.models';

describe('UsersModels', () => {
  let component: UsersModels;
  let fixture: ComponentFixture<UsersModels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersModels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersModels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
