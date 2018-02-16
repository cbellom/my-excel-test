import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  protected _value = '';
  protected _error: string = null;
  protected _selected = false;
  protected _isMouseOver = false;

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
    console.log(value);
    this.onChange.next(value);
  }

}
