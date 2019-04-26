import { Component, OnInit, Input } from '@angular/core';
import { preno } from '../prenotazioni';
@Component({
  selector: 'app-preno-view',
  templateUrl: './preno-view.component.html',
  styleUrls: ['./preno-view.component.css']
})
export class PrenoViewComponent implements OnInit {
@Input() ciao : preno;
  constructor() { }

  ngOnInit() {
  }

}
