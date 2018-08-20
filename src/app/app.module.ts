import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import	{	HttpModule	}	from	'@angular/http';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], // verificar que no livro estava preenchido
  bootstrap: [AppComponent]
})
export class AppModule { }
