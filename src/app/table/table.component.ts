import { Component, OnInit } from '@angular/core';
import { Validations } from '../models/enums/validations.enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [];
  properties: any = {};
  validations: Validations[] = [];

  constructor() { }

  ngOnInit() {
    this.properties = {
      name: {
        name: 'Nombre',
        editable: true,
      },
      lastname: {
        name: 'Apellido',
        editable: true,
      },
      age: {
        name: 'Edad',
        editable: false,
      }
    };


    this.data = [
      { name: 'camilo', lastname: 'bello', age: '10', errors: { name: 'error 1', lastname: 'error 2' } },
      { name: 'dayana', lastname: 'alejo', age: '10', errors: { lastname: 'error 2' } },
      { name: 'lol', lastname: 'wow', age: '10', errors: { name: 'error 1' } },
      { name: '4n', lastname: 'seven', age: '20'},
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
