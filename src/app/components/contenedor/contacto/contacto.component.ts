import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'] // Cambié 'styleUrl' a 'styleUrls'
})
export class ContactoComponent {
  isTerraVisible: boolean = false;
  previousScrollY: number = 0; // Nueva variable para rastrear la posición anterior del scroll

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Verifica si el usuario se desplaza hacia arriba o hacia abajo
    if (scrollY < this.previousScrollY && scrollY > 10) {
      // Desplazándose hacia arriba
      this.isTerraVisible = true;
    } else {
      // Desplazándose hacia abajo
      this.isTerraVisible = false;
    }

    // Actualiza la posición anterior del scroll
    this.previousScrollY = scrollY;
  }

  openingTimes = [
    { days: 'Monday - Thursday', hours: '9AM - 6PM' },
    { days: 'Friday', hours: '10AM - 6PM' },
    { days: 'Saturday', hours: 'CLOSED' },
    { days: 'Sunday', hours: 'CLOSED' }
  ];

  contactDetails = {
    phone: '+57 3212449799',
    email: 'ysmedina@jc.edu.co'
  };

  socialMedia = [
    { name: 'Facebook', icon: 'https://static.vecteezy.com/system/resources/thumbnails/016/716/447/small_2x/facebook-icon-free-png.png', url: 'https://facebook.com/yava-labs' },
    { name: 'Instagram', icon: 'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png', url: 'https://instagram.com/yava-labs' },
    { name: 'YouTube', icon: 'https://cdn-icons-png.flaticon.com/512/174/174883.png', url: 'https://youtube.com/yava-labs' },
    { name: 'WhatsApp', icon: 'https://img.icons8.com/win10/200/FFFFFF/whatsapp.png', url: 'https://wa.me/19294209437' }
  ];

  onSubmit(formData: any) {
    console.log(formData);
    // Implementar lógica de envío aquí
  }
}
