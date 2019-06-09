import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes [] = [
    {
      nombre: 'Alert',
      icono: 'american-football',
      url: '/alert'
    },
    {
      nombre: 'Action Sheet',
      icono: 'appstore',
      url: '/action-sheet'
    },
    {
      nombre:'Avatar y chip',
      icono:'man',
      url:'/avatar'
    },
    {
      nombre: 'Cards',
      icono:'albumns',
      url: '/card'

    },
    {
      nombre: 'Button',
      icono:'botones',
      url: '/button'
    },
    {
      nombre: 'Fab',
      icono: 'attach',
      url: '/fab'
    }
   ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componentes {
  nombre: string;
  icono: string;
  url: string;
}
