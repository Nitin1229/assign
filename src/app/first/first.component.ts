import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string="";
  place: string="";
  constructor(private entry: EntryService) { }

  ngOnInit(): void {
  }
  onClick()
  {
    this.entry.name = this.name;
    this.entry.place= this.place;
  }
}
