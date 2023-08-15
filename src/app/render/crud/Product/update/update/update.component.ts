import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../../../service/data-service.service';
import { Product } from '../../models/productmodel';
import { ProductForUpdate } from '../../models/productForUpdate';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  
  updating:boolean = false;
  service = inject(DataServiceService)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute)
  id = this.activeRoute.snapshot.paramMap.get("id");
  productFromApi: Product | null= null
  waiting:boolean = false
  errorMessages =
  {
    name: "",
    description: "",
    price: ""
  }
 
  constructor(){
    this.getProductFromApi();
  }

  goToProductListForm(){
    this.router.navigateByUrl('crud');
  }

  getProductFromApi(){
    this.waiting = true
    this.service.getProduct(Number(this.id)).subscribe({
      next:(product : Product) => { this.productFromApi = product},
      error: _ => alert("error"),
      complete: () => this.waiting = false
    })
  }

  submit() {
    if (this.formIsValid()) {
      const payLoad: ProductForUpdate = {
        name: this.productFromApi?.name!,
        price: this.productFromApi?.price!,
        description: this.productFromApi?.description!
      }

      this.waiting = true;
      this.service.updateProduct(this.productFromApi?.id!, payLoad).subscribe({
        next: _ => this.router.navigateByUrl("crud"),
        error: _ => alert("Error"),
        complete: () => this.updating = false
      })
    }
  }

  formIsValid():boolean{
    return true;
  }
}
