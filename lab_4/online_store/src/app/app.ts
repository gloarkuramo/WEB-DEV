import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list.component/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html'
})
export class App {}
