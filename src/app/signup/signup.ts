import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup{
  Firstname ='';
  Lastname='';
username= '';
password='';

constructor(private router: Router, private UserService: UserService) {}

   OnSubmit() {
     if (this.Firstname && this.Lastname && this.username && this.password) {
      const user = {
        Firstname: this.Firstname,
        Lastname: this.Lastname,
        username: this.username,
        password: this.password
      };
      this.UserService.setUser(user);
       alert ('Account Registration Successfull, directing you to the Login Page');
      this.router.navigate(['/login']);
    } else {
      alert('Unsuccessfull attempt, please fill all fields');
    }
  

  }
}
