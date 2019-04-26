import { Component, OnInit } from '@angular/core';
import { preno } from '../prenotazioni';
import { prenos, Prenos } from '../prenos';

@Component({
  selector: 'app-prenos',
  templateUrl: './prenos.component.html',
  styleUrls: ['./prenos.component.css']
})
export class PrenosComponent implements OnInit {

  prenos = Prenos
  selectedPrenos: Prenos;

  constructor() { }

  ngOnInit() {
  }

  onSelect(preno: Prenos): void {
    this.selectedPrenos = preno;
  }

  onAddCar(Nome: HTMLInputElement,Cognome: HTMLInputElement,Indirizzo: HTMLInputElement,Telefono: HTMLInputElement,Email: HTMLInputElement,DataPrenotazione: HTMLInputElement,OraPrenotazione: HTMLInputElement,)
  {
      let prenotazione : Prenos = new Prenos();
      prenotazione.Nome = Nome.value;
      prenotazione.Cognome = Cognome.value;
      prenotazione.Indirizzo = Indirizzo.value;
      prenotazione.Telefono = Number(Telefono.value);
      prenotazione.Email = Email.value;
      prenotazione.DataPrenotazione = Date(DataPrenotazione.value);
      prenotazione.OraPrenotazione = Number(OraPrenotazione.value);

      this.prenos.push(prenotazione);
  }
}