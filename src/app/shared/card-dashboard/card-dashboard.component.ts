import { Component, Input } from '@angular/core';
import { Dashboard } from '../dashboard.model';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent {
  @Input() dashboard: Dashboard;
}
