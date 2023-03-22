import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPierwszaComponent } from './components/lista-pierwsza/lista-pierwsza.component';
import { ListaDrugaComponent } from './components/lista-druga/lista-druga.component';
import { ListaTrzeciaComponent } from './components/lista-trzecia/lista-trzecia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListaPierwszaComponent,
    ListaDrugaComponent,
    ListaTrzeciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
