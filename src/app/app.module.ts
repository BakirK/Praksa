import 'ag-grid-enterprise';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SelectRendererComponent } from './form/select-cell/select-cell-renderer.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { AppNavToolbarComponent } from './navbar/app-nav-toolbar/app-nav-toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavService } from './services/Sidenav.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroImageComponent,
    AppNavToolbarComponent,
    FormComponent,
    SelectRendererComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    HttpClientModule,
    MatGridListModule,
    AgGridModule.withComponents([SelectRendererComponent]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent],
})
export class AppModule {}
