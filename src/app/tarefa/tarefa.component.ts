import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  imports: [CommonModule],
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  TAREFA_KEY = 'tarefa_key'
  listaTarefa: any[] = [];
  constructor() { }

  ngOnInit(): void {
    const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if(tarefas){
      this.listaTarefa = JSON.parse(tarefas)
    }
  }

  adicionar(nomeTarefa: String){

    if(nomeTarefa.trim().length == 0){
      return;
    }

    const tarefaEncontrada = this.listaTarefa.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())

    if(!tarefaEncontrada){
      this.listaTarefa.push({id: this.listaTarefa.length, nome: nomeTarefa, concluida: false})
      this.salvarLista()
    }   
  }

  deletar(id: number) {
    this.listaTarefa = this.listaTarefa.filter(item => (item.id != id) )
    this.salvarLista()
  }

  completar(id: number) {
    const tarefaEncontrada = this.listaTarefa.find( item => item.id == id)

    if(tarefaEncontrada) {
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida
      this.salvarLista()
    }
  }

  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.listaTarefa))
  }
}

