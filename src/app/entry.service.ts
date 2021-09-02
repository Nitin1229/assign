import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  name: string="";
  place: string="";
  constructor() { }
}
