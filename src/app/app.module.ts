import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from './../environments/environment';


import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule  } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { provideStorage, getStorage } from "@angular/fire/storage";


export const firebaseConfig = {
  apiKey: "AIzaSyB7Dnh_0d0c8mNDuC-wkIkiO1TUXFofV_E",
  authDomain: "veterinaria-83f64.firebaseapp.com",
  databaseURL: "https://veterinaria-83f64-default-rtdb.firebaseio.com",
  projectId: "veterinaria-83f64",
  storageBucket: "veterinaria-83f64.appspot.com",
  messagingSenderId: "921955471799",
  appId: "1:921955471799:web:256d11379bc46cfbd39832",
  measurementId: "G-ZST4XN87J5"
};
////



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
   AppRoutingModule,HttpClientModule, AngularFireModule.initializeApp(environment.firebaseConfig),// firebase
    AngularFirestoreModule,
    AngularFireAuthModule, 
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()), //Inicialice Cloud Storage y obtenga una referencia al servicio
    provideFirestore(() => getFirestore())],     
 
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  //
  
})


export class AppModule {}


