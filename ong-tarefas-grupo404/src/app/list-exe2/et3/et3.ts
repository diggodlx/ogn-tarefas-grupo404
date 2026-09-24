import { Component } from '@angular/core';

@Component({
  selector: 'app-et3',
  standalone: false,
  templateUrl: './et3.html',
  styleUrl: './et3.scss',
})
export class Et3 {
  idade: number = 18;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
