import { Component } from '@angular/core';

@Component({
  selector: 'counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  count:number = 0;
  increment(){
    if(this.count <100){
      this.count=this.count+1 
    }
  }
  decrement(){
    if(this.count > 0){
      this.count = this.count-1
    }
  }
  reset(){
    this.count = 0
  }
}
