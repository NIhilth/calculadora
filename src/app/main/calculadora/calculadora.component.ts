import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  conta = ""
  checagem = ""

  ngOnInit() {
  }

  passarNumeroVisor(digito) {
    if(digito != "+" && digito != "*" && digito != "/" && digito != "-"){
      if(this.conta == "+" || this.conta == "*" || this.conta == "/" || this.conta == "-"){
        this.conta = this.conta.substring(1)
      }
      this.conta += digito
    } else if (this.checagem != "+" && this.checagem != "*" && this.checagem != "/" && this.checagem != "-") {
      this.conta += digito
    }
    this.checagem = digito
  }

  resultado() {
    this.conta = eval(this.conta)
  }

  restartar() {
    this.conta = ""
  }

}
