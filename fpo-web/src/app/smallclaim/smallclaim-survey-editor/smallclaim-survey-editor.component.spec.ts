import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallclaimSurveyEditorComponent } from './smallclaim-survey-editor.component';

describe('SmallclaimSurveyEditorComponent', () => {
  let component: SmallclaimSurveyEditorComponent;
  let fixture: ComponentFixture<SmallclaimSurveyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallclaimSurveyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallclaimSurveyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
