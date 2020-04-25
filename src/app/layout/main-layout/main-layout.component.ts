import { Component, OnInit } from '@angular/core';
import {AppComponent}        from '../../app.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.less']
})
export class MainLayoutComponent implements OnInit {

  showFiller = false;



  public menuItems;
 // protected global = this.parent.getGlobals();
  constructor(
    private parent: AppComponent
  ) { }


  logout(){
    // return this.parent.logout();
  }

  login(){
    // this.parent.getRouter().navigateByUrl("login");
  }

  loggedInUser(){
    return {first_name: 'James K.'};
    // return this.parent.loggedInUser();
  }

  isLoggedIn(){
    return true;
   // return this.parent.isLoggedIn();
  }

  displayMenuItems(){
    return this.parent.getMenuItems();
  }

  ngOnInit() {
   // this.parent.refreshMenuItems();
  }

}
