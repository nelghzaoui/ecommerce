import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar.component';

@Component({
  selector: 'tx-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <header>
      <tx-navbar />
      <main>
        <router-outlet />
      </main>
      <footer></footer>
    </header>
  `,
  styles: ``
})
export class AppComponent {
  title = 'starter';
}
