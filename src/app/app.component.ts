import { Component } from '@angular/core';
import { ColorContainerComponent } from "./components/color-container/color-container.component";


@Component({
  selector: 'app-root',
  imports: [ColorContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'sc2';
}
