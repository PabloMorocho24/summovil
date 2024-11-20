import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-contrasenia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-contrasenia.component.html',
  styleUrls: ['./input-contrasenia.component.css']
})
export class InputContraseniaComponent {
  contrasenia: string = '';
}
