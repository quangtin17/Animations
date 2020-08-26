import { Component, OnInit } from '@angular/core';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation } from '../animation';
import { trigger, transition, state, style, animate, keyframes, useAnimation, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        query('h1', [
          style({ transform: 'translateY(-20px)' }),
          animate(1000)
        ]),
        query('@todoAnimation', animateChild()
        )
      ])
    ]),
    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ]),
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

  animationStarted($event) {
    console.log($event);
  }

  animationDone($event) {
    console.log($event);
  }

}
