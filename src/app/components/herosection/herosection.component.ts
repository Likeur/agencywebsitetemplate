import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import gsap from 'gsap';

@Component({
  selector: 'app-herosection',
  imports: [NavbarComponent],
  templateUrl: './herosection.component.html',
  styles: ``,
})
export class HerosectionComponent implements AfterViewInit {
  public overlaytl = gsap.timeline({});

  public ngAfterViewInit(): void {
    gsap.to('.overlay1', {
      x: 400,
      opacity: 0.1,
      y: -170,
      bottom:2,
      duration: 6,

      repeat: -1, // Répète indéfiniment
      yoyo: true,
      ease: 'power4.inOut',
    });

    gsap.to('.overlay2', {
      x: -800,
      y: -220,
      opacity: 0.1,
      duration: 7,

      repeat: -1, // Répète indéfiniment
      yoyo: true,
      ease: 'ease',
    });
  }
}
