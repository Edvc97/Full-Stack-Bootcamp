import { Injectable } from '@angular/core';

interface User {
  firstName: string,
  lastName: string,
  email: string
}

interface collections {
  [email: string]: User;
}

@Injectable({
  providedIn: 'root',
})

export class Db {

  collections: collections = {};

  createAndSaveUser(firstName: string, lastName: string, email: string, isForUpdate = false): boolean {

    
    if (this.collections[email] && !isForUpdate) {
      return false;
    }
    const newUserToAdd = { firstName, lastName, email };

    this.collections[email] = newUserToAdd;
    return true;

  }

  get Users(): User[] {
    return Object.values(this.collections);
  }

  deleteUser(email: string): void {
    delete this.collections[email];
  }

  getUserByEmail(email: string) {
    return this.collections[email] || null;
  }
}
