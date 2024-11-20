import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  standalone: true,
  templateUrl: './btn-secundario.component.html',
  styleUrls: ['./btn-secundario.component.css']
})
export class BtnSecundarioComponent {
  @Output() clickSecundario = new EventEmitter<void>();

  onClick() {
    this.clickSecundario.emit();
  }
}
