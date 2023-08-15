import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Joke } from './render/joke/joke.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  apiClient = inject(HttpClient);
  baseUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(){

  }
  
  getJoke(){
    return this.apiClient.get<Joke>(this.baseUrl)
  }
  
}

