import { CartService } from './../../services/domain/cart.service';
import { ProdutoService } from './../../services/domain/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produto-detail',
  templateUrl: 'produto-detail.html',
})
export class ProdutoDetailPage {

  item: ProdutoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService,
    public cartService: CartService) {
  }

  ionViewDidLoad() {
    let produto_id = this.navParams.get('produto_id');
    this.produtoService.findById(produto_id)
    .subscribe(response => {
      this.item = response;
    },
    error => {});
  }

  addToCart(produto: ProdutoDTO) {
    this.cartService.addProduto(produto);
    this.navCtrl.setRoot('CartPage');
  }

}
