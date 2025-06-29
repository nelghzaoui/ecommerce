import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tx-root',
  imports: [RouterOutlet],
  template: `
    <header></header>
    <main>
      <router-outlet />
    </main>
    <footer></footer>
  `,
  styles: ``
})
export class AppComponent {
  title = 'starter';
}
