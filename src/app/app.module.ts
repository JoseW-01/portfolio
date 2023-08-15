import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './render/joke/home.component';
import { CrudComponent } from './render/crud/crud/crud.component';
import { ResumenComponent } from './resumen/resumen/resumen.component';
import { ProductComponent } from './render/crud/Product/product.component';
import { UpdateComponent } from './render/crud/Product/update/update/update.component';
import { CreateComponent } from './render/crud/Product/create/create/create.component';
import { NotFoundComponent } from './render/crud/Product/not found/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudComponent,
    ResumenComponent,
    ProductComponent,
    UpdateComponent,
    CreateComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
