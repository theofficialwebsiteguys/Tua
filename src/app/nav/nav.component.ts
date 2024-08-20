import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

interface DropdownMenu {
  id: string;
  title: string;
  items: { link: string, label: string }[];
  active: boolean;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, HeroComponent, CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    mobileMenuActive: boolean = false;
    isMobile: boolean = false;
  
    constructor() {}
  
    ngOnInit(): void {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
  
    toggleMobileMenu(): void {
      this.mobileMenuActive = !this.mobileMenuActive;
    }
  
    closeMenu(): void {
      this.mobileMenuActive = false;
    }
  
    checkScreenSize(): void {
      this.isMobile = window.innerWidth <= 768;
    }
}
