import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: { src: string, alt: string }[] = [
    { src: 'assets/art1.jpg', alt: 'Delicious Dish 1' },
    { src: 'assets/art2.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/art3.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/art4.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/bar1.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/bar2.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/bar3.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/bar4.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/bar5.jpg', alt: 'Delicious Dish 2' },
    { src: 'assets/bar6.jpg', alt: 'Restaurant Interior 1' },
    { src: 'assets/bar7.jpg', alt: 'Restaurant Interior 2' },
    { src: 'assets/bar8.jpg', alt: 'Restaurant Interior 2' },

    // Add more images as needed
  ];
}
