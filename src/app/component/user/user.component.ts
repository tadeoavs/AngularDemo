import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false,
})
export class UserComponent  implements OnInit {

  public title: string = "userComponent";
  public isAdmin: boolean = false;
  public calcTitle: string = "calcComponent jejeje";
  public isAlertOpen: boolean = false;
  public alertButtons: string[] = ['Yes', 'No'];
  public alertMessage: string = '';
  public amount: number = 1341.50;
  public todayIs: Date = new Date();

  constructor() { }

  ngOnInit() {}

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  handleEvent(event: string) {
    this.alertMessage = event;
    this.isAlertOpen = !this.isAlertOpen;
  }

}
