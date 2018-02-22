import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  properties = {};
  data = [];
  templateData = {};

  constructor() {
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


    this.templateData = { name: '', lastname: '', age: '' };
  }
}
