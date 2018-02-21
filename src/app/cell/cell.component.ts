import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Type } from '../models/enums/type.enum';
import { Validations } from '../models/enums/validations.enum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  public Type = Type;

  protected _value = '';
  protected _error: string = null;
  protected _type: Type = Type.String;
  protected _validations: Validations[] = [];
  protected _selected = false;
  protected _isMouseOver = false;
  protected _editable = true;

  @Input()
  set value(value: string) {
    this._value = value ? value.trim() : '';
  }
  @Input()
  set selected(value: boolean) {
    this._selected = value;
  }
  @Input()
  set error(value: string) {
    this._error = value && value !== '' ? value : null;
  }
  @Input()
  set validations(value: Validations[]) {
    this._validations = value;
  }
  @Input()
  set editable(value: boolean) {
    this._editable = value;
  }

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  hello(input) {
    console.log(input);
  }

  selectCell() {
    this._selected = true;
  }

  unselectCell() {
    this._selected = false;
  }

  change(value) {
    console.log('Edit one cell to', value);
    this.onChange.next(value);
  }

}
