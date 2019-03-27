import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent implements OnInit {
  public cacheName: string;
  public complete: Function;
  public data: any;

  constructor() { }

  ngOnInit() {
    this.data = UserData;
  }

}

const UserData = {
  firstName: "User",
  lastName: "Test",
  address: "Test address",
  phone: 78855446622,
  email: "test@gmail.com",
  forms: {
    inProgress: [
      {
        name: "test1"
      },{
        name: "test2"
      },{
        name: "test4"
      }
    ],
    finished: [
      {
        name: "test3"
      },{
        name: "test5"
      },{
        name: "test6"
      }
    ],
    submitted: [
      {
        name: "test7"
      },{
        name: "test8"
      },{
        name: "test9"
      }
    ]
  }
};
