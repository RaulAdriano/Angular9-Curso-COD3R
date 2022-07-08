import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(
    private productService:ProductService, 
    private router: Router, 
    private route: ActivatedRoute){ 

    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readByid(id!).subscribe(product =>{
      this.product = product
    });
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel() : void{
    this.router.navigate(['/products'])
  }

}
