import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  standalone: true,
  templateUrl: './btn-aceptar.component.html',
  styleUrls: ['./btn-aceptar.component.css']
})
export class BtnAceptarComponent {
  @Output() clickAceptar = new EventEmitter<void>();

  onClick() {
    this.clickAceptar.emit();
  }
}
