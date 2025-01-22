import { AfterViewInit, Component } from '@angular/core';
import { HerosectionComponent } from '../../components/herosection/herosection.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CtaComponent } from '../../components/cta/cta.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { FaqComponent } from '../../components/faq/faq.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landingpage',
  imports: [HerosectionComponent, TestimonialsComponent, PricingComponent, FaqComponent, CtaComponent, FooterComponent],
  templateUrl: './landingpage.component.html',
})
export default class LandingpageComponent implements AfterViewInit {


  public ngAfterViewInit(): void {
    
    gsap.from('#pricingheadline1, #pricingheadline2, #pricingbox,  .onepricing', {
      scrollTrigger: {
        trigger: '#pricingsection',
        start: 'top 50%', 
        end: 'bottom 50%',    
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y:50,
      stagger:{
        amount:0.2
      },
      ease:'power4.inOut',
      duration: 1,
      
    });

    gsap.from('#testiheadline1, #testiheadline2, #testibox,  .onetesti', {
      scrollTrigger: {
        trigger: '#testisection',
        start: 'top 50%', 
        end: 'bottom 50%',    
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y:50,
      stagger:{
        amount:0.2
      },
      ease:'power4.inOut',
      duration: 1,
      
    });

    gsap.from('#ctaheadline1, #ctaheadline2', {
      scrollTrigger: {
        trigger: '#ctasection',
        start: 'top 50%', 
        end: 'bottom 50%',    
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y:50,
      stagger:{
        amount:0.2
      },
      ease:'power4.inOut',
      duration: 1,
      
    });

    gsap.from('.ctacircle', {
      scrollTrigger: {
        trigger: '#ctasection',
        start: 'top 50%', 
        end: 'bottom 50%',    
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      scale:0,
      stagger:{
        amount:0.1
      },
      ease:'power4.inOut',
      duration: 1,
      
    });
    
  }
}
