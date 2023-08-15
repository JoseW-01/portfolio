import { Component, inject } from '@angular/core';
import { Product } from './models/productmodel';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  waiting:boolean = false;
  product: Product[] = [];
  router = inject(Router);
  dataService = inject(DataServiceService);
  
  constructor(){
    //se inicializa la funcion que trae la lista desde la api en el constructor
    this.getListFromApi();

   
  }

  //esta funcion te lleva a la pagina del update usando el router, y capturando el evento click en la vista
  goToUpdateForm(id:number){
    this.router.navigateByUrl('/crud/update/' + id)
  }
  
  deleteProduct(id:number){
    if(confirm("¿Desea eliminar este producto?")){
      this.dataService.deleteProduct(id).subscribe({
        next:()=> this.getListFromApi(),
        error:() => alert("error")
      })
    }

  }
  //esta funcion llama a la api, mediante el endpoint get para traer la lista
  getListFromApi(){
    
    this.waiting = true;
    this.dataService.getList().subscribe({
      next:(list: Product[]) => {this.product = list},
      error: (error) => {alert("error"); console.log("error", error)},
      complete: () => this.waiting = false
    })
  }
  goToCrud(){
    this.router.navigateByUrl("crud")
  } 

}
