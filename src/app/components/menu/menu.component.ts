import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from 'src/app/common/ComponentCanDeactivate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
