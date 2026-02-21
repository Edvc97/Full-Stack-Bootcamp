import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Db } from '../db';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-update',
  imports: [
     FormsModule,
     RouterLink
  ],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update {
  route = inject(ActivatedRoute);
  db = inject(Db);
  
  firstName: string = '';
  lastName: string = '';
  email: string = '';


  constructor() {

    this.route.params.subscribe((data) => {
      if(!data['email']) return;

      const user = this.db.getUserByEmail(data['email']);

      if (!user) return;

      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
    }
    );

    

  }
  updateUser(): void {
    console.log("Updating user with email: ", this.email);

    const isCreated = this.db.createAndSaveUser(this.firstName, this.lastName, this.email, true);

    if (isCreated === false) {
      alert("Email already exists!");
    }

    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

}
