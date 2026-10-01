import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'média' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-et13',
  standalone: false,
  templateUrl: './et13.html',
  styleUrl: './et13.scss',
})
export class Et13 {
  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar página inicial',
      responsavel: 'João',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 2,
      titulo: 'Cadastrar produtos',
      responsavel: 'Maria',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 3,
      titulo: 'Testar sistema',
      responsavel: 'Carlos',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Corrigir formulário',
      responsavel: 'Ana',
      prioridade: 'baixa',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Atualizar banco de dados',
      responsavel: 'Pedro',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Fazer documentação',
      responsavel: 'Lucas',
      prioridade: 'média',
      concluida: false
    }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get tarefasConcluidas(): number {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  get tarefasPendentes(): number {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }
}
