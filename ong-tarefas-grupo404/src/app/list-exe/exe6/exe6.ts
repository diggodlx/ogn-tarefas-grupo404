import { Component } from '@angular/core';

@Component({
  selector: 'app-exe6',
  standalone: false,
  templateUrl: './exe6.html',
  styleUrl: './exe6.scss',
})
export class Exe6 {
  
  quantidade: number = 0;

  aumentar(): void {
    this.quantidade++;
  }

  diminuir (): void{
    if (this.quantidade > 0) {
      this.quantidade --
    }
  }
}
