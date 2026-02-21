import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Home';
  welcomeMessage = 'Welcome to Week 2 Angular!';
  goal = 'Today we practice components, routes, and interpolation.'; 
  pets: string [] =  ['Dog', 'Cat', 'Fish', 'Turtle'];
}
