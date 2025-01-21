import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) { // Verificamos que navbar no sea null
      if (window.pageYOffset > 50) { // Cambia este valor según sea necesario
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

}
