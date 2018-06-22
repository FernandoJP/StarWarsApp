import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../../models/Character';
import { resolveCname } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url: string = 'http://www.mocky.io/v2/5b2971722f00006300f561a9';

  constructor(private http: HttpClient) { }

  getCharacters() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.url)
        .toPromise()
        .then(
          res => { // Success
            let characters:Array<Character> = new Array();
            for(let i = 0; i < Object.keys(res).length; i++){
              let character = new Character();
              character.name = res[i].name;
              character.height = res[i].height;
              character.mass = res[i].mass;
              character.hairColor = res[i].hair_color;
              character.skinColor = res[i].skin_color;
              character.eyeColor = res[i].eye_color;
              character.birthYear = res[i].birth_year;
              character.gender = res[i].gender;
              characters.push(character);
            }
            resolve(characters);
          }
        );
    });
    return promise;
  }
}
