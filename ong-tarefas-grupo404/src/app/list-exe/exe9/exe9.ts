import { Component } from '@angular/core';

@Component({
  selector: 'app-exe9',
  standalone: false,
  templateUrl: './exe9.html',
  styleUrl: './exe9.scss',
})
export class Exe9 {

  estoque = 0;

  aumentar(): void {
    this.estoque++;
  }

  diminuir (): void{
    if (this.estoque > 0) {
      this.estoque --;
    }
}
}
