import { Component, inject } from '@angular/core';
import { Db } from '../db';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-read',
  imports: [RouterLink],
  templateUrl: './read.html',
  styleUrl: './read.css',
})
export class Read {
  db = inject(Db);

}
