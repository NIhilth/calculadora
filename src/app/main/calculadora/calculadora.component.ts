import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  conta = ""
  
  ngOnInit() {
  }

  passarNumeroVisor(digito){
    this.conta += digito
  }

  resultado(){
    this.conta = eval(this.conta)
  }

  restartar(){
    this.conta = ""
  }

}
