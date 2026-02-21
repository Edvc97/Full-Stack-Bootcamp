import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Db } from '../db';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create',
  imports: [
    FormsModule,
    DragDropModule
  ],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  db = inject(Db);
  text: string = "";


  addNote() {

    //Check if the trimmed text is empty, if it is, return and do not add a note
    if (this.text.trim() === "") {
      return;
    }
    this.db.addNote(this.text);
    this.text = "";
  }
  removeNote(index: number) {
    this.db.removeNote(index);
  }

  toggleDone(index: number) {
    this.db.toggleDone(index);
  }

  drop(event: CdkDragDrop<any[]>) {
    this.db.reorderNotes(event.previousIndex, event.currentIndex);
  }


}
