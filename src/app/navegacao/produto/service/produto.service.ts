import {HttpClient} from "@angular/common/http";
import { Produto } from "../entity/produto";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProdutoService{

    constructor(private http: HttpClient){ }

    protected urlServidor : String = "http://localhost:3000";

    obterListaProduto() : Observable<Produto[]>{
        return this.http.get<Produto[]>(this.urlServidor+"/produtos")
    }
}

    

        