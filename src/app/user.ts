import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any = null;
  private isBrowser: boolean;

  constructor() {
    // ✅ check if running in browser
    this.isBrowser = typeof window !== 'undefined' && !!window.localStorage;

    if (this.isBrowser) {
      const stored = localStorage.getItem('userData');
      if (stored) {
        this.userData = JSON.parse(stored);
      }
    }
  }

  setUser(data: any) {
    this.userData = data;
    if (this.isBrowser) {
      localStorage.setItem('userData', JSON.stringify(data));
    }
  }

  getUser() {
    return this.userData;
  }

  clearUser() {
    this.userData = null;
    if (this.isBrowser) {
      localStorage.removeItem('userData');
    }
  }
}
