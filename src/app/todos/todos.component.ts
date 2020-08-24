import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ backgroundColor: 'yellow', opacity: 0 })),
      transition('void => *', [
        // style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ]),
      transition('* => void', [
        animate(2000, style({ opacity: 0 }))
      ])
    ])
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
