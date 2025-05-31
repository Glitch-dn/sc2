
import { Component, inject, Input, OnInit } from '@angular/core'; 
import { Color, ColorGroup} from '../../models/color'; 
import { ColorsService } from '../../services/colors.service'; 
import { ColorGroupComponent } from "../color-group/color-group.component"; 

@Component({
  selector: 'app-color-container', 
  imports: [ColorGroupComponent], 
  templateUrl: './color-container.component.html', 
  styleUrl: './color-container.component.css' 
})
export class ColorContainerComponent implements OnInit { 

  colors: [string, Color[]][] = []; // Array di coppie [nome gruppo, array di colori]; dati passati al figlio

  colorsService: ColorsService = inject(ColorsService); // Inietta il servizio ColorsService per ottenere i colori

  ngOnInit(): void {
    const colorGroup: ColorGroup = this.colorsService.getColors(); // Recupera i gruppi di colori dal servizio
    this.colors = Object.entries(colorGroup); // Trasforma ColorGroup in un array iterabile di [nome gruppo, colori]
  }

  getColor(hex: string) {
    // Per ogni gruppo di colori
    this.colors.forEach(([_, group]) => {
      group.forEach(color => color.active = false); // Disattiva tutti i colori ('active' a false per ogni colore)
      const toActivate = group.find(color => color.hex === hex); // Cerca il colore cliccato nel gruppo
      if (toActivate) toActivate.active = true; // Se trovato, attiva solo quello cliccato ('active' a true)
    });

    navigator.clipboard.writeText(hex); // Copia il valore esadecimale negli appunti
    console.log(hex); // Stampa il valore esadecimale nella console
  }
}