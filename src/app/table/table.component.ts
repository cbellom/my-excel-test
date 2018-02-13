import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [];

  constructor() { }

  ngOnInit() {
    this.data = [
      {name: 'camilo', lastname: 'bello'},
      {name: 'camilo', lastname: 'bello'},
      {name: 'camilo', lastname: 'bello'},
    ];
  }

}
