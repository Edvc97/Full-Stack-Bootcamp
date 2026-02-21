import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class First {

  pets = ['Dog', 'Cat', 'Hamster', 'Parrot', 'Spider', 'Goldfish'];

}
