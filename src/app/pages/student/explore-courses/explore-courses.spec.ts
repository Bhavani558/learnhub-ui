import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCourses } from './explore-courses';

describe('ExploreCourses', () => {
  let component: ExploreCourses;
  let fixture: ComponentFixture<ExploreCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCourses],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreCourses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
