import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: any [] = [];

  sortOptions: any[] = [];

  sortOrder: number;

  sortField: string;

  sortKey: string;

  banners = ['assets/imgs/3uzmt1x5bgbjcuab-0_0_desktop_0_1X.webp',
              'assets/imgs/BANNER-GTECH-3060-12GB.jpg',
              'assets/imgs/fkzsyry1bzf4cwym-0_0_desktop_0_1X.jpg',
              'assets/imgs/geforce-ada-4090-web-partner-banner-1425x420-es-mx-1.jpg'];

  constructor(private http: HttpClient) {
    this.sortOptions = [
      {label: 'De alto a bajo', value: '!price'},
      {label: 'De bajo a alto', value: 'price'}
  ];
  }

  ngOnInit() {
    this.getCarsLarge().then((data:any) => {
      this.products = data.data.slice(0,9);
    })
  }

  getCarsLarge() {
    return lastValueFrom(this.http.get('/assets/products.json'))
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

}
