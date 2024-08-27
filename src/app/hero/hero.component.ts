import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  isShrunk: boolean = false;
  isMobile: boolean = false;
  private routerSubscription: Subscription | undefined;

  reviews = [
    { author: 'Leslie', stars: '★★★★★', text: 'Partner and I were vacationing in the area and planned to stop by...' },
    { author: 'Ama Dominguez', stars: '★★★★★', text: 'The food was delicious 😋, our waitress was awesome very sweet...' },
    { author: 'Justin D', stars: '★★★★★', text: 'Parents — Amores is a great option for bringing your kids out...' },
    { author: 'Justin D', stars: '★★★★★', text: 'Parents — Amores is a great option for bringing your kids out...' },
  ];

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isShrunk = !(event.url === '/' || event.urlAfterRedirects === '/' || event.url === '/home' || event.urlAfterRedirects === '/home');
        this.cdr.detectChanges(); // Trigger change detection immediately
      }
    });
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }


  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 1024;
    this.cdr.detectChanges(); // Trigger change detection for screen size changes
  }
}
