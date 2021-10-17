import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';

@Injectable({
  providedIn: 'root'
})
export class AutService {
  userData: any;
  constructor(private fbAut: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router) {
    this.fbAut.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', this.userData.email)
      }
    })
  }
  signIn(email: string, password: string) {
    return this.fbAut.signInWithEmailAndPassword(email, password)
      .then((result) => { this.router.navigate(['/']) })
      .catch((error) => { window.alert(error.message); })
  }

  signUp(email: string, password: string) {
    return this.fbAut.createUserWithEmailAndPassword(email, password)
      .then((result) => { this.router.navigate(['/']) })
      .catch((error) => { window.alert(error.message); })
  }

  logout() {
    return this.fbAut.signOut()
      .then((result) => {
        localStorage.removeItem('user')
        this.router.navigate(['/'])
      })
  }

  isLoggedIn() {
    const user = localStorage.getItem('user')
    return user ? true : false;
  }

  getUser() {
    const user = localStorage.getItem('user')
    return user ? user : null;

  }
}
