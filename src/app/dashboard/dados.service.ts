import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Feveireiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27],
  ];

  constructor() {}

  /**
   * Retorna um observable contendo os dados a serem
   * exibidos no gráfico.
   * @return Observable<any>
   * 
   * Abaixo, estamos criando um observable manualmente
   */

  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
