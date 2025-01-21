import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  public linkStyle = signal("hover:text-orange-600 duration-300")
}
