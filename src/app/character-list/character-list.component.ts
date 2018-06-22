import { Component, OnInit, Inject } from '@angular/core';
import { CharacterService } from "../services/character/character.service";
import { Character } from '../models/Character';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters:Array<Character>;
  constructor(public characterService:CharacterService, public dialog: MatDialog) { }

  ngOnInit() {  
    this.characterService.getCharacters().then( (data) => this.characters = data as Array<Character>)
  }

  openDialog(character:Character) {
    this.dialog.open(DetailsDialog, {
      data: character
    });
  }

}

@Component({
  selector: 'details-dialog',
  templateUrl: 'details-dialog.html',
  styleUrls: ['details-dialog.scss']
})
export class DetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<Character>) {}
}