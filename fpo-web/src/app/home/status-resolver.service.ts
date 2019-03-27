import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { GeneralDataService } from '../general-data.service'
import { LoginService } from "../login.service";

@Injectable()
export class UserStatusResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private dataService: GeneralDataService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo !== '') {
      console.log(userInfo);
      console.log(1);
      // this.router.navigate([state.url])
    } else {
      console.log(2);
      // this.handleLoadError();
    }
    // return Observable.fromPromise(
    //   this.dataService.requireLogin().catch(this.handleLoadError.bind(this)));
  }

  handleLoadError() {
    this.router.navigate(['prv/status']);
  }
}
