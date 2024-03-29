import { trigger, animate, transition, style, query } from '@angular/animations';

export const routerHomeAnimation = trigger('routerHomeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':leave', style({ position: 'absolute', left:0, right:0,  opacity: 1 }), { optional: true }),
    query(':enter', style({ position: 'absolute', left:0, right:0, opacity: 0 }), { optional: true }),
    query(':leave', animate('0.3s ease-in-out', style({ opacity: 0 })), { optional: true }),
    query(':enter', animate('0.3s ease-in-out', style({ opacity: 1 })), { optional: true })
  ])
]);