import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  protected _value = '';

  @Input()
  set value(value: string) {
    this._value = value ? value.trim() : '';
  }

  constructor() { }

  ngOnInit() {
  }

}
