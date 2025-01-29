import { AfterViewInit, Component } from '@angular/core';
import { HerosectionComponent } from '../../components/herosection/herosection.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CtaComponent } from '../../components/cta/cta.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { WhyusComponent } from '../../components/whyus/whyus.component';
import { ProcessComponent } from '../../components/process/process.component';
import { ProjectComponent } from '../../components/project/project.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landingpage',
  imports: [
    HerosectionComponent,
    WhyusComponent,
    ProjectComponent,
    ProcessComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
  ],
  templateUrl: './landingpage.component.html',
})
export default class LandingpageComponent implements AfterViewInit {
  public introtl = gsap.timeline();

  public ngAfterViewInit(): void {
    this.introtl
      .from('.oneletter', {
        opacity: 0,
        x: 70,
        duration: 2,
        stagger: {
          amount: 0.5,
        },
        ease: 'power4.inOut',
      })
      .to('.oneletter', {
        opacity: 0,
        x: -70,
        duration: 2,
        stagger: {
          amount: 0.5,
        },
        ease: 'power4.inOut',
      })
      .to('#entrancecover', {
        scaleY: 0,
        duration: 2,
        ease: 'power4.inOut',
      })
      .from(
        '#herosection',
        {
          opacity: 0,
          duration: 2,
          ease: 'power4.inOut',
        },
        '-=1.7'
      )
      .from(
        '#navtool',
        {
          y: -100,
          duration: 1.5,
          ease: 'power4.inOut',
        },
        '-=1.5'
      )
      .from(
        '#herotextbox, #heroimagebox, #logomarquee',
        {
          y: 50,
          duration: 1.5,
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          ease: 'power4.inOut',
        },
        '-=1.5'
      );

    gsap.from(
      '#pricingheadline1, #pricingheadline2, #pricingbox,  .onepricing',
      {
        scrollTrigger: {
          trigger: '#pricingsection',
          start: 'top 50%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        stagger: {
          amount: 0.2,
        },
        ease: 'power4.inOut',
        duration: 1,
      }
    );

    gsap.from('#testiheadline1, #testiheadline2, #testibox,  .onetesti', {
      scrollTrigger: {
        trigger: '#testisection',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      stagger: {
        amount: 0.2,
      },
      ease: 'power4.inOut',
      duration: 1,
    });

    gsap.from('#whyusheadline1, #whyusbox,  .onewhyus', {
      scrollTrigger: {
        trigger: '#whyussection',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      stagger: {
        amount: 0.2,
      },
      ease: 'power4.inOut',
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
      y: 50,
      stagger: {
        amount: 0.2,
      },
      ease: 'power4.inOut',
      duration: 1,
    });

    gsap.from('.etapebox1', {
      scrollTrigger: {
        trigger: '.etapebox1',
        start: 'top 65%',
        end: 'bottom 65%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0.2,
      y: 50,
      stagger: {
        amount: 0.2,
      },
      ease: 'power4.inOut',
      duration: 1,
    });
    gsap.from('.etapebox2', {
      scrollTrigger: {
        trigger: '.etapebox2',
        start: 'top 65%',
        end: 'bottom 65%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0.2,
      y: 50,
      stagger: {
        amount: 0.2,
      },
      ease: 'power4.inOut',
      duration: 1,
    });

    gsap.from('#separatorprocess', {
      scrollTrigger: {
        trigger: '#processsection',
        start: 'top 75%',
        end: 'bottom 20%',
        scrub: true,
      },
      height: '0vh',
      ease: 'power4.inOut',
      duration: 1,
    });

    gsap.from('.etapebox3', {
      scrollTrigger: {
        trigger: '.etapebox3',
        start: 'top 65%',
        end: 'bottom 65%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0.2,
      y: 50,
      stagger: {
        amount: 0.2,
      },
      ease: 'power4.inOut',
      duration: 1,
    });

    gsap.from('#projectheadline,.oneproject', {
      scrollTrigger: {
        trigger: '.oneproject',
        start: 'top 65%',
        end: 'bottom 65%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      stagger: {
        amount: 0.2,
      },
      ease: 'power4.inOut',
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
      scale: 0,
      stagger: {
        amount: 0.1,
      },
      ease: 'power4.inOut',
      duration: 1,
    });
  }
}
