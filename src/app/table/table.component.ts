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
  canDeleteRows = true;

  constructor() { }

  ngOnInit() {
    this.properties = {
      delete: {
        name: '',
      },
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

  delete(item) {
    console.log(item);
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  getItemProperties(item) {
    return Object.keys(item).filter((property) => property !== 'errors');
  }

  updateValue(item, property, value) {
    item[property] = value;
  }

}
