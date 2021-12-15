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
  tamanho = 0
  condicao = 0

  ngOnInit() {
  }

  passarNumeroVisor(digito) {
    if (this.condicao == 1 && (this.checagem == "+" || this.checagem == "*" || this.checagem == "/" || this.checagem == "-" || this.checagem == "(")) {
      this.conta += digito
      this.condicao = 0
    } else if (digito != "+" && digito != "*" && digito != "/" && digito != "-") {
      if (this.conta == "+" || this.conta == "*" || this.conta == "/" || this.conta == "-") {
        this.conta = this.conta.substring(1)
      }
      this.conta += digito
    } else if (this.checagem != "+" && this.checagem != "*" && this.checagem != "/" && this.checagem != "-" && this.checagem != "(") {
      this.conta += digito
    } 
    
    this.checagem = digito
  }

  resultado() {
    this.tamanho = this.conta.length
    this.checagem = this.conta.substring(this.tamanho - 1)
    if (this.checagem != "+" && this.checagem != "*" && this.checagem != "/" && this.checagem != "-" && this.checagem != "(") {
      this.conta = eval(this.conta)
      this.conta = this.conta
    } else {
      this.conta = this.conta.substring(0, this.tamanho - 1)
      this.condicao = 1
    }

  }

  restartar() {
    this.conta = ""
  }

  apagarValor(){
    this.tamanho = this.conta.length
    this.conta = this.conta.substring(0, this.tamanho - 1)
    this.conta = this.conta
  }

}
