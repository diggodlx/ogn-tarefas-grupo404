import { Component } from '@angular/core';

@Component({
  selector: 'app-et1',
  standalone: false,
  templateUrl: './et1.html',
  styleUrl: './et1.scss',
})
export class Et1 {

  mensagemVisivel: boolean = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
