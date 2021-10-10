import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  constructor(private fbAut: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router) {
    this.fbAut.authState.subscribe(user => {
      if (user)
        console.log('user ', user)

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
}
