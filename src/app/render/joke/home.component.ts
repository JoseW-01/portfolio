import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Joke } from './joke.component';

@Component({
  selector: 'app-api',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

waiting: boolean = false;
dataService = inject(DataService)
joke: Joke | null = null;

  constructor() {}

  ngOnInit(): void {

    this.getRamdonJoke()

  }


  getRamdonJoke(){
     this.waiting = true;
    this.dataService.getJoke().subscribe({
      next:(joke: Joke) => (this.joke = joke),
      error:(error) => {alert(error); console.log("error",error)},
      complete: () => this.waiting = false
      
    })
   
  }
  
  console = console.log(this.joke)

}
