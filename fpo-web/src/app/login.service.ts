import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LoginService {

  public userInfo = new BehaviorSubject('');
  constructor() { }
  login( userEmail: string ){
    this.userInfo.next(userEmail);
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo !== this.userInfo.value) {
      return true;
    } else {
      return false;
    }
  }
}
