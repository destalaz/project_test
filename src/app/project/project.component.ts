import { Component, OnInit } from '@angular/core';

import dataConfig from '../data.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  dataTest: any = [];

  constructor(
  ) { }

  ngOnInit(): void {
    //console.log(dataConfig);
    this.dataTest = dataConfig.form;
     console.log(this.dataTest);
  }

}
