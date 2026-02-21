import { Injectable, signal } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

export interface Note {
  text: string,
  done: boolean
}

@Injectable({
  providedIn: 'root',
})

export class Db {

  notes = signal<Note[]>([]);

  //Adding note(s) using our created notes signal
  addNote(text: string) {

    this.notes.update(items => [...items, { text, done: false }]);
    console.log(this.notes);

  }

  //Removing notes(s) using our created note signal
  removeNote(index: number) {

    this.notes.update(items => items.filter((item, i) => i != index));

  }

  toggleDone(index: number) {

    this.notes.update(
      items => items.map((item, idx) => {
        if (idx === index) 
        { 
          return { text: item.text, done: !item.done }; 
        } 
        return item;

      })
    );

  }

  reorderNotes(fromIndex: number, toIndex: number) {
    this.notes.update(currentNotes => {
      const items = [...currentNotes];
      moveItemInArray(items, fromIndex, toIndex);
      return items;
    });

  }
}
