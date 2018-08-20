import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  
  pessoas : any [] = [
    {id:1, nome: 'Amanda'},
    {id:2, nome: 'Ana'},
    {id:3, nome: 'Carolina'},
    {id:4, nome: 'Maria'},
    {id:5, nome: 'João'},
    {id:6, nome: 'Paulo'}
  ];

  constructor() { }

  ngOnInit() {
  }
  meuSave(index:	number,	nomes:	any)	{
    return	nomes.id;
  }

  atualizar():void{
    this.pessoas = [
      {id:1, nome: 'Amanda'},
      {id:2, nome: 'Ana'},
      {id:3, nome: 'Carolina'},
      {id:4, nome: 'Maria'},
      {id:5, nome: 'João'},
      {id:6, nome: 'Paulo'},
      {id:7, nome: 'Lucas'}
    ];
  }
}
