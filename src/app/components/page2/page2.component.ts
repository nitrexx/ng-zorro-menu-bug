import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from 'src/app/common/ComponentCanDeactivate';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit, ComponentCanDeactivate {

  constructor() { }

  canDeactivate(): boolean {
    return false;
  }
  
  ngOnInit() {
  }

}
