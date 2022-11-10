import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import * as firebase from 'firebase/compat';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { getStorage, ref } from "firebase/storage";


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
   
  
  

  constructor() { }
  

  //anda esto descomentar todo para abajo
  public photos: UserPhoto[] = [];

   public async addNewToGallery() {
    // tomar foto
const capturedPhoto = await Camera.getPhoto({
 resultType: CameraResultType.Uri,
 source: CameraSource.Camera,
 quality: 100     });
    //
     // inicio prueba 9-11
    
  // fin prueba 9-11
 this.photos.unshift({
 filepath: "soon...",
   webviewPath: capturedPhoto.webPath
 });
   }
 }
 export interface UserPhoto {
   filepath: string;
   webviewPath: string;
  


  // esta  llave es de arriba no borrar
}


