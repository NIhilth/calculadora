import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  constructor() { }

  @Input() numero
  @Output() numeroConta = new EventEmitter<any>()

  passarValor(){
    this.numeroConta.emit(this.numero)
  }

  ngOnInit() {
  }

}
