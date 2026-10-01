import { Component } from '@angular/core';

@Component({
  selector: 'app-df',
  standalone: false,
  templateUrl: './df.html',
  styleUrl: './df.scss',
})
export class Df {

  mostrarConcluidos = true;

  projetos = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe Alpha',
      nota: 8.5,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Aplicativo de Tarefas',
      equipe: 'Equipe Beta',
      nota: 6.5,
      status: 'testes',
      entregue: false
    },
    {
      id: 3,
      titulo: 'Sistema para ONG',
      equipe: 'Equipe Gamma',
      nota: 9,
      status: 'desenvolvimento',
      entregue: true
    },
    {
      id: 4,
      titulo: 'Site Institucional',
      equipe: 'Equipe Delta',
      nota: null,
      status: 'planejamento',
      entregue: false
    },
    {
      id: 5,
      titulo: 'Sistema de Eventos',
      equipe: 'Equipe Ômega',
      nota: 5.5,
      status: 'concluído',
      entregue: true
    }
  ];

  get projetosExibidos() {
    if (this.mostrarConcluidos) {
      return this.projetos;
    }

    return this.projetos.filter(
      projeto => projeto.status !== 'concluído'
    );
  }

  get quantidadeConcluidos() {
    return this.projetos.filter(
      projeto => projeto.status === 'concluído'
    ).length;
  }

  alterarStatus(projeto: any, novoStatus: string) {
    projeto.status = novoStatus;
  }
}
