import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-cancelar',
  standalone: true,
  templateUrl: './btn-cancelar.component.html',
  styleUrls: ['./btn-cancelar.component.css']
})
export class BtnCancelarComponent {
  @Output() clickCancelar = new EventEmitter<void>();

  onClick() {
    this.clickCancelar.emit();
  }
}
