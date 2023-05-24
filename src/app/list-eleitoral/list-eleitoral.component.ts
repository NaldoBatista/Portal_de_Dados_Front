import { Component } from '@angular/core';
import { Dashboard } from '../shared/dashboard.model';
import { DB } from '../dashboards.db';

@Component({
  selector: 'app-list-eleitoral',
  templateUrl: './list-eleitoral.component.html',
  styleUrls: ['./list-eleitoral.component.css']
})
export class ListEleitoralComponent {
  mostrarTodos = false;
  textoBotao = 'Mostrar todos';

  dashboards: Dashboard[] = DB.filter(dashboard => dashboard.domain=='eleitoral')
  onMostrarTodosClick() {
    this.mostrarTodos = !this.mostrarTodos;
    this.textoBotao = this.mostrarTodos ? 'Mostrar menos' : 'Mostrar todos'
  }
}
