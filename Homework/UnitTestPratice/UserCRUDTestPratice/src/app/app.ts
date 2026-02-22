import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list.component/user-list.component';
import { UserAddComponent } from './components/user-add.component/user-add.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserAddComponent, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UserCRUDTestPratice');
}
