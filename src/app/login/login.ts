import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
username= '';
password='';
errorMessage = '';

constructor(private router: Router, private UserService: UserService) {

}

   OnSubmit() {
    const savedUser=this.UserService.getUser()
    if(savedUser && savedUser.username == this.username && savedUser.password == this.password)
    {
      this.errorMessage='';
      alert('Login Successfull')
      this.router.navigate(['/dashboard'])
    }
    else{
      this.errorMessage='Invalid Credentials'
    }

  }
    
}