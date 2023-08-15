import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../Product/models/productmodel';
import { ProductForUpdate } from '../Product/models/productForUpdate';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  apiClient = inject(HttpClient);
    baseUrl = "http://localhost:5107";


    getList(){
        return this.apiClient.get<Product[]>(this.baseUrl + '/product')
    }

    getProduct(id:number){
        return this.apiClient.get<Product>(this.baseUrl + '/product/'+ id)
    }

    deleteProduct(id:number){
        return this.apiClient.delete<boolean>(this.baseUrl + '/product/' + id)
    }

    updateProduct(id: number, payLoad: ProductForUpdate){
        return this.apiClient.put<Product>(this.baseUrl + "/product/" + id , payLoad)
    }

    createProduct(payLoad:ProductForUpdate){
        return this.apiClient.post<Product>(this.baseUrl + "/product/" , payLoad)
    }
}
