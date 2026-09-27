import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  userName:string=""
  userEmail:string=""
  name(event: Event){
    // this.username=(event.target as HTMLInputElement).value 
  }
  email(event: Event){
    // this.userEmail = (event.target as HTMLInputElement).value
  }
  handleSubmit(name: string, email: string){
    this.userName = name;
    this.userEmail = email
  }
}
