import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaComponent } from "./tarefa/tarefa.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TarefaComponent]
})
export class AppComponent {
  title = 'tasktidy-projeto';
}
