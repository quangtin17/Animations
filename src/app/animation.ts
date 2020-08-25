import { trigger, transition, state, style, animate, keyframes } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ backgroundColor: 'yellow', opacity: 0 })),
  transition('void => *', [
    // style({ backgroundColor: 'yellow', opacity: 0 }),
    animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
  ]),
  transition('* => void', [
    animate(2000, style({ opacity: 0 }))
  ])
]);


export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px' }),
    animate(500)
  ]),

  transition(':leave', [
    animate('0.5s ease-in', keyframes([
      style({
      offset: .2,
      opacity: 1,
      transform: 'translateX(20px)'}),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)'}) // offset this is a percent of keyframes
    ]))
  ])
]);
