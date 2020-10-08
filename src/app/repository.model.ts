import { SimpleDataSource } from './datasource.model';
import { Product } from './product.model';


export class ProductRepository{
    dataSource: SimpleDataSource;
    products: Product[];

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p=>this.products.push(p));
    }

    getProducts(){
        return this.products;
    }

    getProductById(id: number){
        return this.products.find(p=>p.id===id);
    }

}