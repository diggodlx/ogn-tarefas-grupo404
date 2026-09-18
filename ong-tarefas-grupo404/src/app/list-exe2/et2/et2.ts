import { Component } from '@angular/core';

@Component({
  selector: 'app-et2',
  standalone: false,
  templateUrl: './et2.html',
  styleUrl: './et2.scss',
})
export class Et2 {
  usuarioLogado: boolean = false; 

  alterarLogin(){
    this.usuarioLogado = !this.usuarioLogado;
  }
}
