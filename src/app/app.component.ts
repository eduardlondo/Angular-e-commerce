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
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ],
            icon: 'pi pi-fw pi-desktop'
        },
        {
            label: 'Celulares',
            icon: 'pi pi-fw pi-mobile',
        },
        {
          label: 'Videojuegos',
          icon: 'pi pi-fw pi-stop-circle',
        },
        {
          label: 'Software',
          icon: 'pi pi-fw pi-server',
        }
    ];
  }
}
