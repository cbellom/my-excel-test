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
      {name: 'camilo', lastname: 'bello', errors: {name: 'error 1', lastname: 'error 2'}},
      {name: 'dayana', lastname: 'alejo'},
      {name: 'lol', lastname: 'wow'},
    ];
  }

  save() {
    console.log(this.data);
  }

  getItemProperties(item) {
    return Object.keys(item).filter((property) => property !== 'errors');
  }

  updateValue(item, property, value) {
    item[property] = value;
  }

}
