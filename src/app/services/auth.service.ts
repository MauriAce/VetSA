import { Injectable } from '@angular/core';
import {  AngularFireAuth} from '@angular/fire/compat/auth';
import { Auth, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { User } from '../shared/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  // Prueba borrar si no anda
    authService: any;
    fireauth: any;
    email: any;
    password: any;
    updateProfile: any;
    error: any;
  private router: Router

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }
  //login
  async onLogin(user: User) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('error en login', error);
    }

   


  }
 // logout
    logout(){
      this.afAuth.signOut().then(() => {
        console.log("Esperamos verte pronto");
      //  this.router.navigateByUrl('/home')
      });
    }

    // registro
  async onRegister(user: User) {
    const auth = getAuth();
    console.log(auth)
    console.log(user.email)
    console.log(user.password)
    // inicio preuba 2 ,

    createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
        if (userCredential.user) {
          console.log(userCredential.user);
          console.log("usuario creado con exito 1");
          this.updateProfile();
        }
      })
      .catch(err => {
        console.log(`Error en el registro ${err}`);
        this.error = err.message;
      });

    
  }
}

function password(auth: Auth, email: any, password: any) {
    throw new Error('Function not implemented.');
}

function email(auth: Auth, email: any, password: (auth: Auth, email: any, password: any) => void) {
    throw new Error('Function not implemented.');
}

