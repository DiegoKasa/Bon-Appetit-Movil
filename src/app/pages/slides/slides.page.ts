import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  slides = [
    {
      img: 'assets/img/LogoH-BonAppetit.svg',
      titulo: 'Bienvenido<br>experimenta algo<br>nuevo'
    },
    // {
    //   img: 'assets/img/LogoK-BonAppetit.svg',
    //   titulo: 'Bienvenido<br>experimenta algo<br>nuevo'
    // },
    {
      img: 'assets/img/pedidos-QR.svg',
      titulo: 'Realiza tus pedidos<br>de forma comoda<br>y rapida'
    },
    {
      img: 'assets/img/reserva-de-mesass.svg',
      titulo: 'Reliza tu reserva<br>y no te quedes<br>fuera'
    }
  ]


}
