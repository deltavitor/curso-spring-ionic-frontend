import { ProdutoDTO } from './../../models/produto.dto';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient) {

    }

    findByCategoria(categoria_id: string, page: number = 0, linesPerPage: number = 24) {
        return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`);
    }

    findById(produto_id: string) {
        return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produto_id}`);
    }
}