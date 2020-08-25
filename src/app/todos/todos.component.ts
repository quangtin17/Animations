import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    fade
  ]
})
export class TodosComponent implements OnInit {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
