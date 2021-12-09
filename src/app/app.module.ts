import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CalculadoraComponent } from './main/calculadora/calculadora.component';
import { VisorComponent } from './main/calculadora/visor/visor.component';
import { BotaoComponent } from './main/calculadora/botao/botao.component';
import { LinhaComponent } from './main/calculadora/linha/linha.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CalculadoraComponent,
    VisorComponent,
    BotaoComponent,
    LinhaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
