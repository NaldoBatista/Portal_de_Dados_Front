import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListEleitoralComponent } from './list-eleitoral/list-eleitoral.component';
import { ListJudiciarioComponent } from './list-judiciario/list-judiciario.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CardDashboardComponent } from './shared/card-dashboard/card-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListEleitoralComponent,
    ListJudiciarioComponent,
    FooterComponent,
    CardDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
