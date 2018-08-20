import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamanho:	number	=	20;
  valorFonte:	string	=	this.tamanho	+	'px';
  
  constructor() { }

  ngOnInit() {
  }
  
  incrementar()	{
    this.tamanho	++;
    this.valorFonte	=	this.tamanho	+	'px';
  }

  /*
  tamanhoFonte = 10;
  valorFonte = "25px";
  novoTamanho = "10px";

  incrementar(): void {
    this.novoTamanho =  this.tamanhoFonte++ + 'px';
  }
  */
}
