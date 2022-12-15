import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  banners = ['assets/imgs/3uzmt1x5bgbjcuab-0_0_desktop_0_1X.webp',
              'assets/imgs/BANNER-GTECH-3060-12GB.jpg',
              'assets/imgs/fkzsyry1bzf4cwym-0_0_desktop_0_1X.jpg',
              'assets/imgs/geforce-ada-4090-web-partner-banner-1425x420-es-mx-1.jpg'];

  constructor() {
}

}
