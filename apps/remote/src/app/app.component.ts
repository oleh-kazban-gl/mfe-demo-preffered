import { Component } from '@angular/core';

@Component({
  selector: 'mfe-demo-root',
  template: `
    <pre>{{ title }}</pre>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'remote';
}
