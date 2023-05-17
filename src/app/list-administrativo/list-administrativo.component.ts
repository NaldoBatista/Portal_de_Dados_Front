import { Component } from '@angular/core';
import { Dashboard } from '../shared/dashboard.model';

@Component({
  selector: 'app-list-administrativo',
  templateUrl: './list-administrativo.component.html',
  styleUrls: ['./list-administrativo.component.css']
})
export class ListAdministrativoComponent {
  dashboards: Dashboard[] = [
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg"),
    new Dashboard("Painel Exemplo", "Esse painel apresenta indicadores de atendimento", "https://static.vecteezy.com/ti/vetor-gratis/p3/8295031-custom-relationship-management-dashboard-ui-design-template-vector-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-gratis-vetor.jpg")
  ]
}
