import { Component } from '@angular/core';

@Component({
  selector: 'app-exe4',
  standalone: false,
  templateUrl: './exe4.html',
  styleUrl: './exe4.scss',
})
export class Exe4 {
 botaoDesabilitado = false;
  mensagem = '';

salvar() {
  this.mensagem = 'Salvo com sucesso!';
  this.botaoDesabilitado = true;
}
}
