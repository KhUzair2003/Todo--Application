import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  user: any
  editableUser: any

  constructor(private router: Router, private UserService: UserService) {
     this.user=this.UserService.getUser()
     this.editableUser = { ...this.user };
  }
  onSave() {
    // update saved data
    this.UserService.setUser(this.editableUser);
    this.user = { ...this.editableUser };
    alert('Profile updated successfully!');
  }
  onLogout() {
  this.UserService.clearUser();
  alert('Logged out!');
  this.router.navigate(['/login']);
}
}
