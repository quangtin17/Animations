import { Component, OnInit } from '@angular/core';
import { fade, slide, bounceOutLeftAnimation, fadeInAnimation } from '../animation';
import { trigger, transition, state, style, animate, keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        // use group to query element appear same time
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)' }),
            animate(1000)
          ]),
          // stagger tạo delay giữa các item khi animation được thực thi
          query('@todoAnimation', stagger(200, animateChild())
          )
        ])
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
