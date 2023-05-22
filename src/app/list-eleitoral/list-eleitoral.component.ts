import { Component } from '@angular/core';
import { Dashboard } from '../shared/dashboard.model';

@Component({
  selector: 'app-list-eleitoral',
  templateUrl: './list-eleitoral.component.html',
  styleUrls: ['./list-eleitoral.component.css']
})
export class ListEleitoralComponent {
  mostrarTodos = false;
  textoBotao = 'Mostrar todos';

  dashboards: Dashboard[] = [
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg")
  ]

  onMostrarTodosClick() {
    this.mostrarTodos = !this.mostrarTodos;
    this.textoBotao = this.mostrarTodos ? 'Mostrar menos' : 'Mostrar todos'
  }
}
