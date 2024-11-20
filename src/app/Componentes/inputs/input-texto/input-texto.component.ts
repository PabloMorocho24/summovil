import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-texto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.css']
})
export class InputTextoComponent {
  texto: string = '';
}
