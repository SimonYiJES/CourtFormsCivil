import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as SurveyKO from 'survey-knockout';
import { ActivatedRoute } from '@angular/router';
import { GeneralDataService } from '../../general-data.service';
import { addQuestionTypes, addToolboxOptions } from '../../survey/question-types';

@Component({
  selector: 'app-supremecourt-survey-editor',
  templateUrl: './supremecourt-survey-editor.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../../node_modules/surveyjs-editor/surveyeditor.css',
    './supremecourt-survey-editor.component.scss'
  ]
})
export class SupremecourtSurveyEditorComponent {
  @Input() surveyJson: any;
  @Input() surveyPath: any;
  @Input() cacheName: string;
  @Input() onComplete: Function;

  public cacheKey: string;
  public cacheLoadTime: any;
  public editor: SurveyEditor.SurveyEditor;
  public loading = true;
  public error: string;
  private useLocalCache = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: GeneralDataService
  ) {}

  ngOnInit() {
    if(! this.cacheName) {
      this.cacheName = this.route.snapshot.data.cache_name;
    }
    if(! this.surveyPath) {
      this.surveyPath = this.route.snapshot.data.survey_path;
    }
    if(! this.surveyJson) {
      this.surveyJson = this.route.snapshot.data.survey;
    }
    SurveyEditor.StylesManager.applyTheme("bootstrap");
    this.loadSurvey();
  }

  loadSurvey(reload: boolean = false) {
    if(this.surveyJson && !reload) {
      this.loading = false;
      this.renderEditor();
    } else {
      this.loadCache().then((ok) => {
        if(!ok && this.surveyPath) {
          this.dataService.loadJson(this.surveyPath).then((data) => {
            this.surveyJson = data;
            this.loadSurvey();
          }); // .catch( (err) => ...)
        } else {
          this.loadSurvey();
        }
      });
    }
  }

  renderEditor() {
    if(! this.editor) {
      addQuestionTypes(SurveyKO);
          var editorOptions = {
        // showTestSurveyTab: false
      };
      this.editor = new SurveyEditor.SurveyEditor('editorElement', editorOptions);
      this.editor.isAutoSave = true;
      this.editor.saveSurveyFunc = (saveNo, callback) => {
        this.saveCache(callback);
      };
      addToolboxOptions(this.editor);
    }
    if(this.surveyJson) {
      this.editor.text = JSON.stringify(this.surveyJson, null, 2);
    }
  }

  resetCache() {
    this.dataService.clearSurveyCache(this.cacheName, this.cacheKey, this.useLocalCache);
    this.cacheLoadTime = null;
    this.cacheKey = null;
    this.loadSurvey(true);
  }

  loadCache() {
    return this.dataService.loadSurveyCache(this.cacheName, this.cacheKey, this.useLocalCache)
      .then(this.doneLoadCache.bind(this))
      .catch((err) => this.doneLoadCache(null, err));
  }

  doneLoadCache(response, err) {
    if(response && response.result) {
      let cache = response.result;
      if(cache.data) {
        this.cacheLoadTime = cache.time;
        this.cacheKey = response.key;
        this.surveyJson = cache.data;
      }
      return true;
    }
    return false;
  }

  saveCache(saveNo?, callback?) {
    let survey = JSON.parse(this.editor.text);
    let cache = {
      'time': new Date().getTime(),
      'data': survey,
    };
    this.dataService.saveSurveyCache(this.cacheName, cache, this.cacheKey, this.useLocalCache)
      .then(
        (result) => this.doneSaveCache(result, null, saveNo, callback),
        (err) => this.doneSaveCache(null, err, saveNo, callback));
  }

  doneSaveCache(response, err, saveNo?, callback?) {
    if(response && response.status === 'ok' && response.result) {
      this.cacheLoadTime = response.result.time;
      this.cacheKey = response.key;
    }
    !!callback && callback(saveNo, ! err);
  }

}
