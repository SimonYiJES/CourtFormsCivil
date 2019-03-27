import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallclaimSurveyComponent } from './smallclaim-survey.component';

describe('SmallclaimSurveyComponent', () => {
  let component: SmallclaimSurveyComponent;
  let fixture: ComponentFixture<SmallclaimSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallclaimSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallclaimSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
