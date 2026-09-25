import { Component,signal } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ong-tarefas-grupo404');

  @Input() 
  topo = "Loja Angular 2"; // app cabecalho

  Loja = "Loja Angular Pai";
}
