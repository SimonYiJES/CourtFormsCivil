import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallclaimSurveyPrimaryComponent } from './smallclaim-survey-primary.component';

describe('SmallclaimSurveyPrimaryComponent', () => {
  let component: SmallclaimSurveyPrimaryComponent;
  let fixture: ComponentFixture<SmallclaimSurveyPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallclaimSurveyPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallclaimSurveyPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
