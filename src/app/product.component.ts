import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductRepository } from './repository.model';

@Component({
    selector: 'app',
    templateUrl: "./product.component.html",
    styleUrls: ['./product.component.css']
})

export class ProductComponent {

    model: ProductRepository = new ProductRepository();

    addProduct() {
        this.model.addProduct(new Product(6, "Samsung s10", "iyi telefon", "6.jpg", 6000))
    }

    deleteProduct(product: Product) {
        this.model.deleteProduct(product);
    }   

    updateProduct(product: Product){
        product.name= "updated-product";
    }

}