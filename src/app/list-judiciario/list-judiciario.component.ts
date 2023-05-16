import { Component } from '@angular/core';
import { Dashboard } from '../shared/dashboard.model';

@Component({
  selector: 'app-list-judiciario',
  templateUrl: './list-judiciario.component.html',
  styleUrls: ['./list-judiciario.component.css']
})
export class ListJudiciarioComponent {
    dashboards: Dashboard[] = [
      new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
      new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
      new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg")
  ]
}
