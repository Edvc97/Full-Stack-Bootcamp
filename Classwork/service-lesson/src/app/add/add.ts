import { Component, inject } from '@angular/core';
import { First } from '../first';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [
    FormsModule,
  ],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  newPetToAdd: string = '';
  firstService = inject(First);

  addPet() {
    this.firstService.pets.push(this.newPetToAdd); 
    this.newPetToAdd = '';
  }

}
