import { Component } from '@angular/core';

@Component({
  selector: 'app-missao',
  standalone: false,
  templateUrl: './missao.html',
  styleUrl: './missao.scss',
})
export class Missao {
  
  nomeAluno: string = '';
  disciplinas: number = 1;
  mensagem: string = '';

  aumentarDisciplinas() {
    this.disciplinas++;
  }

  diminuirDisciplinas() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagem =
      `Matrícula realizada com sucesso! Aluno: ${this.nomeAluno}. Quantidade de disciplinas: ${this.disciplinas}.`;
  }
}
