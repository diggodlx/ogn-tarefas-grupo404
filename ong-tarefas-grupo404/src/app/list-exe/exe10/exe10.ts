import { Component } from '@angular/core';

@Component({
  selector: 'app-exe10',
  standalone: false,
  templateUrl: './exe10.html',
  styleUrl: './exe10.scss',
})
export class Exe10 {
  usuario: string = '';
  senha: string = '';
  mensagem: string = '';

  entrar() {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }
}
