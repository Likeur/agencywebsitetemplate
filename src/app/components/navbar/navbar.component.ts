import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  public navIsOpen = false
  public linkStyle = signal("hover:text-orange-600 duration-300")


  public toggleNav(){
    this.navIsOpen = !this.navIsOpen
  }
}
