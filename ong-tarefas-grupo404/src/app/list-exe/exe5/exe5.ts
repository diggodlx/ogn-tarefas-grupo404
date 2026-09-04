import { Component } from '@angular/core';

@Component({
  selector: 'app-exe5',
  standalone: false,
  templateUrl: './exe5.html',
  styleUrl: './exe5.scss',
})
export class Exe5 {

  curtidas = 0;

  curtir() {
    this.curtidas++;
  }
}
