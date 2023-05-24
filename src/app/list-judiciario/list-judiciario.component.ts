import { Component } from '@angular/core';
import { Dashboard } from '../shared/dashboard.model';
import { DB } from '../dashboards.db';

@Component({
  selector: 'app-list-judiciario',
  templateUrl: './list-judiciario.component.html',
  styleUrls: ['./list-judiciario.component.css']
})
export class ListJudiciarioComponent {
  mostrarTodos = false;
  textoBotao = 'Mostrar todos';

    dashboards: Dashboard[] = DB.filter(dashboard => dashboard.domain=='judiciario')

  onMostrarTodosClick() {
    this.mostrarTodos = !this.mostrarTodos;
    this.textoBotao = this.mostrarTodos ? 'Mostrar menos' : 'Mostrar todos'
  }
}
