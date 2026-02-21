import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Db } from '../db';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-create',
  imports: [
    FormsModule,
    RouterLink
],
  templateUrl: './create.html',
  styleUrl: './create.css',
})


export class Create {
  db = inject(Db);
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  

  createUser(): void {
    const isCreated = this.db.createAndSaveUser(this.firstName, this.lastName, this.email);

    if (isCreated === false) {
      alert("Email already exists!");
    }

    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }
}
