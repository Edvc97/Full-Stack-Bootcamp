import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { First } from '../first';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  firstService = inject(First);
}
