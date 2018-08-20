import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  //pessoas: string [] = ['Maria', 'João', 'Paula'];
  pessoas: string[];
  nome:	string	=	"Silvia";
  
  constructor(private pessoaService: PessoaService) { 
    this.pessoas = pessoaService.getPessoas();
  }

  ngOnInit() {
  }
  
  enviarNome():void{
    let obj = {id:10, nome: this.nome} ;
    this.pessoaService.setPessoas(obj);
  }

  meuSave(index:number, nomePessoas: any){
    return nomePessoas.id;
  }
  
  atualizar():void{
    this.pessoaService.atualizar();
    this.pessoas = this.pessoaService.getPessoas();
  }

}
