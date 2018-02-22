import { Component, OnInit, Input } from '@angular/core';
import { Validations } from '../models/enums/validations.enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  _data: any[] = [];
  _properties: any = {};
  _templateData: any = {};
  _validations: Validations[] = [];

  _tableClass: string;
  _canDeleteRows = true;
  _canAddRows = true;

  @Input()
  set data(value: any[]) {
    this._data = value;
  }
  @Input()
  set properties(value: any) {
    this._properties = value;
  }
  @Input()
  set templateData(value: any) {
    this._templateData = value;
  }
  @Input()
  set validations(value: Validations[]) {
    this._validations = value;
  }
  @Input()
  set canDeleteRows(value: boolean) {
    this._canDeleteRows = value;
  }
  @Input()
  set canAddRows(value: boolean) {
    this._canAddRows = value;
  }
  @Input()
  set tableClass(value: string) {
    this._tableClass = value;
  }

  constructor() { }

  save() {
    console.log(this._data);
  }

  delete(item) {
    const index = this._data.indexOf(item);
    if (index !== -1) {
      this._data.splice(index, 1);
    }
  }

  add() {
    this._data = this._data.concat(this._templateData);
  }

  getItemProperties(item) {
    return Object.keys(item).filter((property) => property !== 'errors');
  }

  updateValue(item, property, value) {
    item[property] = value;
  }

}
