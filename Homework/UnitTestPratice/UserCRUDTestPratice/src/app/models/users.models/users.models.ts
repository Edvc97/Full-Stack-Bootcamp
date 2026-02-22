import { Component } from '@angular/core';

export interface User {
  id: string;
  name: string;
}


@Component({
  selector: 'app-users.models',
  imports: [],
  templateUrl: './users.models.html',
  styleUrl: './users.models.css',
})
export class UsersModels {

}
