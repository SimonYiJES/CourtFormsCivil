import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralDataService } from '../../general-data.service';

declare var window: any;

@Component({
  selector: 'app-supremecourt-survey-primary',
  templateUrl: './supremecourt-survey-primary.component.html',
  styleUrls: ['./supremecourt-survey-primary.component.scss']
})
export class SupremecourtSurveyPrimaryComponent implements OnInit {

    public cacheName: string;
    public showSidebar: boolean = true;
    public printUrl: string;
    public resultJson: any;
    public surveyPath: string;
    public surveyJson: any;
    public complete: Function;
    public data: any;
    public jsonObject: any;





    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: GeneralDataService,
    ) { }

    ngOnInit() {
        let routeData = this.route.snapshot.data;
        this.surveyPath = routeData.survey_path;
        this.surveyJson = routeData.survey;
        this.cacheName = routeData.cache_name;
        if('show_sidebar' in routeData)
            this.showSidebar = routeData.show_sidebar;
        this.complete = (data) => this.onComplete(data);
    }

    onComplete(data) {
        let path = this.route.snapshot.url[0].path;
        if(path === 'qualify') {
            let ok = (data.ExistingPOR === 'n') ? 'qualified' : 'unqualified';
            this.router.navigate(['result', ok]);
        }
        else if(this.cacheName) {


            this.data = data;

            this.resultJson = JSON.stringify(data);
            console.log("resultJson is" + this.resultJson);

            this.resultJson = JSON.stringify(data);
            this.jsonObject = JSON.parse(this.resultJson);

            this.printUrl = this.dataService.getApiUrl('survey-print/' + this.cacheName);
        }
    }


}
