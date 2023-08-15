import { Component, inject } from '@angular/core';
import { DataServiceService } from '../../../service/data-service.service';
import { Router } from '@angular/router';
import { ProductForUpdate } from '../../models/productForUpdate';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  errorMessages ={
    name: "",
    price: "",
    description: ""
  }
  creating: boolean = false;
  router = inject(Router)
  service = inject(DataServiceService)
  newProduct: ProductForUpdate = {
    name: "",
    price: 0,
    description: ""
  }
  async doubleValidation() {
    // lista de productos
    const list = await this.service.getList().toPromise()
    //si el nombre ya existe.
    const exists: boolean = list!.some(product => product.name == this.newProduct.name)
    //mensaje del duplicado
    if(exists){
      this.errorMessages.name = "Este producto ya existe."
    }
    return exists
  }

  async submit(){
    if(await this.formIsValid()){
      this.creating = true;
      this.service.createProduct(this.newProduct!).subscribe({
        next: _ => this.router.navigateByUrl("crud"),
        error: _ => alert("Error"),
        complete: () => this.creating = false
      })
    }
  }

  async formIsValid(){
    if(this.newProduct.name.includes("-")){
      this.errorMessages.name = "This character '-' is not valid."
      return false
    }
    if(await this.doubleValidation()){
      return false
    }
    return true
  }
  goToProductList(){
    this.router.navigateByUrl("crud")
  }
}
