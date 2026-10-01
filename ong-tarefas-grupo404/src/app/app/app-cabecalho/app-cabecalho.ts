import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-cabecalho',
  standalone: false,
  templateUrl: './app-cabecalho.html',
  styleUrl: './app-cabecalho.scss',
})
export class AppCabecalho {
  @Input() titulo: string = 'Listangem';
}
