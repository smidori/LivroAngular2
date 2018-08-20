import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }
  //nomePessoas : string [] = ['Amanda', 'Ana', 'Carolina','Maria', 'João', 'Paula'];
  nomePessoas : any [] = [
    {id:1, nome: 'Amanda'},
    {id:2, nome: 'Ana'},
    {id:3, nome: 'Carolina'},
    {id:4, nome: 'Maria'},
    {id:5, nome: 'João'},
    {id:6, nome: 'Paulo'}
  ];

  getPessoas(): string [] {
    return this.nomePessoas;
  }

  setPessoas(nome):void{
    this.nomePessoas.push(nome);
  }
  
  atualizar(){
    this.nomePessoas = [
      {id:1, nome: 'Amanda'},
      {id:2, nome: 'Ana'},
      {id:3, nome: 'Carolina'},
      {id:4, nome: 'Mariaaaaa'},
      {id:5, nome: 'João'},
      {id:6, nome: 'Paulo'},
      {id:7, nome: 'Lucas'}
    ];
  }

}
