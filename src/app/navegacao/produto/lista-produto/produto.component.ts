import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../entity/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[]=[];

  ngOnInit(): void {
    this.produtoService.obterListaProduto()
      .subscribe(
        listaProdutos =>{
          this.produtos = listaProdutos;
        },
        error => console.error(error)
      )

  }

}
