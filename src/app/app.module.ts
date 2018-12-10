import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
   MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatTabsModule} from '@angular/material';

import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { HireEmployeeComponent } from './hire-employee/hire-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    DashboardComponent,
    MenuNavigationComponent,
    HireEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    NgMatSearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
