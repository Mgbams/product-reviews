import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ReviewsComponent } from './reviews.component';

describe('ReviewsComponent', () => {
  // Arrange
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    const queryElement = fixture.debugElement.query(By.css('.brand'));
    fixture.detectChanges();
  });

  it('should create', () => {
    //Act
    let reviewCommentActive = false;

    // Assert
    expect(component).toBeTruthy();
  });
});
