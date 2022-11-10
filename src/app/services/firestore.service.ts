import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';
import { getStorage } from "firebase/storage"
import { Observable } from 'rxjs';
import { initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root'
})


export class FirestoreService {
  encodeImageUri: any;

  constructor(private firestore: AngularFirestore) { }
  //
  getDoc<tipo>(path: string, id: string) {
    const collection = this.firestore.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }
  //

  creatDoc() {
    this.firestore.collection('Mascota')
  }
  getCollection() {
    console.log('leer');
    this.firestore.collection('Mascota').valueChanges().subscribe((res) => {
      console.log('res -> ', res);
      });
      }
    //
  public insertar(Mascota, datos) {
    return this.firestore.collection(Mascota).add(datos);
  } 

  //

   


  }
  

