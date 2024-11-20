import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-mdoscuro',
  standalone: true,
  templateUrl: './btn-mdoscuro.component.html',
  styleUrls: ['./btn-mdoscuro.component.css']
})
export class BtnMdOscuroComponent {
  @Output() toggleModoOscuro = new EventEmitter<void>();

  onClick() {
    this.toggleModoOscuro.emit();
  }
}
