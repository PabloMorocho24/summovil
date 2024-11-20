import { Component } from '@angular/core';
import { BtnAceptarComponent } from './Componentes/botones/btn-aceptar/btn-aceptar.component';
import { BtnCancelarComponent } from './Componentes/botones/btn-cancelar/btn-cancelar.component';
import { BtnMdOscuroComponent } from './Componentes/botones/btn-mdoscuro/btn-mdoscuro.component';
import { BtnPrimarioComponent } from './Componentes/botones/btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from './Componentes/botones/btn-secundario/btn-secundario.component';
import { FormsModule } from '@angular/forms';
import { InputContraseniaComponent } from './Componentes/inputs/input-contrasenia/input-contrasenia.component';
import { InputEmailComponent } from './Componentes/inputs/input-email/input-email.component';
import { InputTextoComponent } from './Componentes/inputs/input-texto/input-texto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    BtnAceptarComponent,
    BtnCancelarComponent,
    BtnMdOscuroComponent,
    BtnPrimarioComponent,
    BtnSecundarioComponent,
    FormsModule,
    InputContraseniaComponent,
    InputEmailComponent,
    InputTextoComponent,
  ],
})
export class AppComponent {
  // Variables para los inputs
  email: string = '';
  contrasenia: string = '';
  texto: string = '';

  // Variables para el visualizador
  visualizadorEmail: string = '';
  visualizadorContrasenia: string = '';
  visualizadorTexto: string = '';

  visualizador: string = ''; // Mensajes adicionales
  isDarkMode: boolean = false;

  // Cambiar el modo de la página
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Función para el botón Primario (mostrar la hora)
  onPrimaryClick() {
    this.visualizador = `Botón Primario presionado a las ${new Date().toLocaleTimeString()}`;
  }

  // Función para el botón Secundario (cambiar el color del texto)
  onSecondaryClick() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.visualizador = `El visualizador ahora tiene color ${randomColor}`;
    document.querySelector('.visualizador')?.setAttribute('style', `color: ${randomColor};`);
  }

  // Función para el botón Aceptar
  onAcceptClick() {
    // Verificar que el correo contenga '@'
    if (!this.email.includes('@')) {
      this.visualizador = 'Por favor ingrese un correo electrónico válido que contenga "@"';
      return; // No se continua con la acción si el correo es inválido
    }

    // Asigna los valores de los inputs al visualizador
    this.visualizadorEmail = this.email;
    this.visualizadorContrasenia = this.contrasenia;
    this.visualizadorTexto = this.texto;

    // Mensaje opcional para confirmar la acción
    this.visualizador = 'Datos enviados correctamente al visualizador.';
  }

  // Función para el botón Cancelar (limpiar los campos)
  onCancelClick() {
    // Limpia los campos de email, contraseña y texto
    this.email = '';
    this.contrasenia = '';
    this.texto = '';
    this.visualizadorEmail = '';
    this.visualizadorContrasenia = '';
    this.visualizadorTexto = '';

    // Mensaje opcional para mostrar que la acción fue cancelada
    this.visualizador = 'Acción cancelada, los campos han sido limpiados.';
  }
}
