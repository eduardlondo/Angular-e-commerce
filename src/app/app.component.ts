import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Computadoras',
            items: [{
                    label: 'Computadoras de Escritorio', 
                },
                {label: 'Portatiles'},
                {label: 'Componentes'}
            ],
            icon: 'pi pi-fw pi-desktop'
        },
        {
            label: 'Celulares',
            icon: 'pi pi-fw pi-mobile',
        },
        {
          label: 'Consolas de videojuegos',
          icon: 'pi pi-fw pi-stop-circle',
        },
    ];
  }
}
