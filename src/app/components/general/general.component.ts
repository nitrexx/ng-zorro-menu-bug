import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from 'src/app/common/ComponentCanDeactivate';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.less']
})
export class GeneralComponent implements OnInit, ComponentCanDeactivate {

  constructor() { }

  canDeactivate(): boolean {
    return false;
  }

  ngOnInit() {
  }

}
