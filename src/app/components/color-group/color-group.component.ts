import { Component, Input, output } from '@angular/core';
import { Color } from '../../models/color';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-color-group',
  imports: [NgClass],
  templateUrl: './color-group.component.html',
  styleUrl: './color-group.component.css'
})
export class ColorGroupComponent {
  @Input() colorsGrouped : Color[]=[];// Riceve dal padre l'array di colori da visualizzare

  // Calcola la luminosità del colore
  getTextColor(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16); // Estrai il valore rosso
    const g = parseInt(hex.slice(3, 5), 16); // Estrai il valore verde
    const b = parseInt(hex.slice(5, 7), 16); // Estrai il valore blu

    // Formula per la luminosità
    const brightness = (0.299 * r + 0.587 * g + 0.114 * b);

    // Se la luminosità è bassa, usa il testo bianco, altrimenti nero
    return brightness < 128 ? 'light' : 'dark';
  }

  onColorClick = output<string>();// Crea un output per emettere l'evento click sul colore che dovrà restituire l'hex del colore selezionato

  // Funzione chiamata al click su una box colore
  handleBoxClick(color: Color) {
    this.onColorClick.emit(color.hex);// Emette l'hex del colore selezionato al padre
  }
}