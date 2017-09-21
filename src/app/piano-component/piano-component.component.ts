import { Component, Input, OnChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-piano-component',
  templateUrl: './piano-component.component.html',
  styleUrls: ['./piano-component.component.css']
})
export class PianoComponentComponent implements OnInit, OnChanges {

  @Input('note') note: string;

  chord = [];

  notes = [
    { key: 'c', name: 'dó' },
    { key: 'c#', name: 'dó #' },
    { key: 'd', name: 'ré' },
    { key: 'd#', name: 'ré #' },
    { key: 'e', name: 'mi' },
    { key: 'f', name: 'fá' },
    { key: 'f#', name: 'fá #' },
    { key: 'g', name: 'sol' },
    { key: 'g#', name: 'sol #' },
    { key: 'a', name: 'lá' },
    { key: 'a#', name: 'lá #' },
    { key: 'b', name: 'si' }
  ];

  generateChords() {

    this.chord = [];

    if (this.note) {

      const chordIndex = this.notes.findIndex(note => note.key.toUpperCase() === this.note.toUpperCase());
      const chordsLength = this.notes.length;

      const firstNote = this.notes[chordIndex];

      if (firstNote) {

        const secondNote = chordIndex + 4 < chordsLength ?
          this.notes[chordIndex + 4] : this.notes[Math.abs(chordsLength - (chordIndex + 4))];

        const thirdNote = chordIndex + 7 < chordsLength ?
          this.notes[chordIndex + 7] : this.notes[Math.abs(chordsLength - (chordIndex + 7))];

        this.chord.push(firstNote, secondNote, thirdNote);
      }
    }
  }

  constructor() { }

  ngOnInit() {
    this.generateChords();
  }

  public ngOnChanges(): void {
    this.generateChords();
  }
}
