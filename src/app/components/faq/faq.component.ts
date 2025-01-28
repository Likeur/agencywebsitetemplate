import { NgFor } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  imports: [NgFor]
})
export class FaqComponent implements AfterViewInit {
  @ViewChildren('faqAnswer') faqAnswers!: QueryList<ElementRef>;
  @ViewChildren('faqIcon') faqIcons!: QueryList<ElementRef>;

  faqItems = [
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking the 'Sign Up' button in the top right corner. Fill in your details including email, password, and personal information, then verify your email to complete registration.",
      isOpen: false
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway.",
      isOpen: false
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7. You can reach us through email at support@example.com, live chat on our website, or call our toll-free number.",
      isOpen: false
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all our services. If you're not satisfied, you can request a full refund within this period. Some conditions may apply.",
      isOpen: false
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary depending on your location. Typically, domestic orders take 3-5 business days, while international orders may take 7-14 business days.",
      isOpen: false
    }
  ];

  ngAfterViewInit() {
    // Initialize all answers to be closed
    this.faqAnswers.forEach((answer, index) => {
      gsap.set(answer.nativeElement, {
        height: 0,
        opacity: 0
      });
    });

    // Entrance animation for the FAQ items
    gsap.from('.faq-item', {
      scrollTrigger: {
        trigger: '#faqsection',
        start: 'top 65%',
        end: 'bottom 65%',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }

  toggleFaq(index: number) {
    const answer = this.faqAnswers.toArray()[index].nativeElement;
    const icon = this.faqIcons.toArray()[index].nativeElement;
    
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;

    if (this.faqItems[index].isOpen) {
      // Open animation
      gsap.to(answer, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
      
      gsap.to(icon, {
        rotation: 180,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      // Close animation
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      });
      
      gsap.to(icon, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }
}
