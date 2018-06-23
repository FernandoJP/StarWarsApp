import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url: string = 'http://www.mocky.io/v2/5b2971722f00006300f561a9';

  constructor(private http: HttpClient) { }

  getCharactersObservable(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url).pipe(
      map(characteres => characteres.map(character => new Character(character)))
    );
  }
}
