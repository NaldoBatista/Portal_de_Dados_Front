import { Component } from '@angular/core';
import { Dashboard } from '../shared/dashboard.model';
import { DB } from '../dashboards.db';

@Component({
  selector: 'app-list-administrativo',
  templateUrl: './list-administrativo.component.html',
  styleUrls: ['./list-administrativo.component.css']
})
export class ListAdministrativoComponent {
  mostrarTodos = false;
  textoBotao = 'Mostrar todos';

  dashboards: Dashboard[] = DB.filter(dashboard => dashboard.domain=='administrativo')

  onMostrarTodosClick() {
    this.mostrarTodos = !this.mostrarTodos;
    this.textoBotao = this.mostrarTodos ? 'Mostrar menos' : 'Mostrar todos'
  }
}
