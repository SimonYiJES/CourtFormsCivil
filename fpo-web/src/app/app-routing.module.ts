import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { ResultComponent } from 'app/result/result.component';
import { GlossaryEditorComponent } from 'app/glossary/editor.component';
import { SurveyPrimaryComponent } from 'app/survey/primary.component';
import { SurveyResolver }   from 'app/survey/survey-resolver.service';
import { SurveyEditorComponent } from 'app/survey/editor.component';
import { UserStatusComponent } from 'app/home/status.component';
import { UserStatusResolver }   from 'app/home/status-resolver.service';
import { SmallclaimSurveyEditorComponent } from './smallclaim/smallclaim-survey-editor/smallclaim-survey-editor.component';
import { SupremecourtSurveyEditorComponent } from './supremecourt/supremecourt-survey-editor/supremecourt-survey-editor.component';
import { SmallclaimSurveyPrimaryComponent } from './smallclaim/smallclaim-survey-primary/smallclaim-survey-primary.component';
import { SupremecourtSurveyPrimaryComponent } from './supremecourt/supremecourt-survey-primary/supremecourt-survey-primary.component';
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";

const routes: Routes = [
  {
    path: '',
    //children: []
    component: HomeComponent
  },
  {
    path: 'profile',
    component: UserDashboardComponent,
    resolve: {
      userInfo: UserStatusResolver,
      // to resolve survey json before rendering the component:
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Profile',
      cache_name: 'profile',
      user_path: 'assets/user-dashboard.json',
    }
  },
  {
    path: 'qualify',
    component: SurveyPrimaryComponent,
    resolve: {
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Prequalification Survey',
      survey_path: 'assets/survey-qualify.json',
      show_sidebar: false,
    }
  },
  {
    path: 'prv',
    redirectTo: 'prv/survey'
  },
  {
    path: 'prv/survey',
    component: SurveyPrimaryComponent,
    resolve: {
      userInfo: UserStatusResolver,
      // to resolve survey json before rendering the component:
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Provincial Family Test',
      cache_name: 'primary',
      survey_path: 'assets/survey-primary.json',
    }
  },
  {
    path: 'smallclaim',
    redirectTo: 'smallclaim/qualify'
  },
  {
    path: 'smallclaim/qualify',
    component: SmallclaimSurveyPrimaryComponent,
    resolve: {
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Prequalification Survey',
      survey_path: 'assets/ScreeningToForm.json',
      show_sidebar: false,
    }
  },
  {
    path: 'smallclaim/survey',
    component: SmallclaimSurveyPrimaryComponent,
    resolve: {
      userInfo: UserStatusResolver,
      // to resolve survey json before rendering the component:
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Provincial Family Test',
      cache_name: 'primary',
      survey_path: 'assets/smallclaim.json',
    }
  },
  {
    path: 'supremecourt',
    redirectTo: 'supremecourt/qualify'
  },
  {
    path: 'supremecourt/qualify',
    component: SupremecourtSurveyPrimaryComponent,
    resolve: {
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Prequalification Survey',
      survey_path: 'assets/PreScreen.json',
      show_sidebar: false,
    }
  },
  {
    path: 'supremecourt/survey',
    component: SupremecourtSurveyPrimaryComponent,
    resolve: {
      userInfo: UserStatusResolver,
      // to resolve survey json before rendering the component:
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Provincial Family Test',
      cache_name: 'primary',
      survey_path: 'assets/survey-primary.json',
    }
  },
  {
    path: 'result/:state',
    component: ResultComponent,
    data: {
      breadcrumb: 'Survey Results'
    }
  },
  {
    path: 'glossary-editor',
    redirectTo: 'prv/glossary-editor'
  },
  {
    path: 'prv/glossary-editor',
    component: GlossaryEditorComponent,
    data: {
      breadcrumb: 'Glossary Editor',
    }
  },
  {
    path: 'survey-editor',
    redirectTo: 'prv/survey-editor'
  },
  {
    path: 'prv/survey-editor',
    component: SurveyEditorComponent,
    resolve: {
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Survey Editor',
      cache_name: 'editor',
      survey_path: 'assets/survey-primary.json'
    }
  },
  {
    path: 'smallclaim/survey-editor',
    component: SmallclaimSurveyEditorComponent,
    resolve: {
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Survey Editor',
      cache_name: 'smallclaim_editor',
      survey_path: 'assets/smallclaim.json'
    }
  },
  {
    path: 'supremecourt/survey-editor',
    component: SupremecourtSurveyEditorComponent,
    resolve: {
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Survey Editor',
      cache_name: 'editor',
      survey_path: 'assets/survey-primary.json'
    }
  },
  {
    path: 'prv/status',
    component: UserStatusComponent,
    data: {
      breadcrumb: 'Status',
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SurveyResolver]
})
export class AppRoutingModule { }
