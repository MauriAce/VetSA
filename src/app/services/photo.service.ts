import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo , CameraPhoto} from '@capacitor/camera';
import * as firebase from 'firebase/compat';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { getStorage, ref } from "firebase/storage";
import { Filesystem, Directory, Encoding ,FilesystemDirectory} from '@capacitor/filesystem';
import { Plugins,Capacitor } from '@capacitor/core';

//15/11
//const { Camera,Filesustem,Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})


export class PhotoService {
  
  ////////////////////////// anda de aca abajo sacar comentario
   
                             constructor() { }
                               
                                public photos: UserPhoto[] = [];
                                       public async addNewToGallery() {
                                    // tomar foto
                                   const capturedPhoto = await Camera.getPhoto({
                                     resultType: CameraResultType.Uri,
                                      source: CameraSource.Camera,
                                     quality: 100     });
  
                                                        this.photos.unshift({
                                                       filepath: "soon...",
                                                         webviewPath: capturedPhoto.webPath
                                                        });
///***************
                                         // Save the picture and add it to photo collection
                                         const savedImageFile = await this.savePicture(capturedPhoto);
                                         this.photos.unshift(savedImageFile);

  }
  //********
  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }
  private async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  ///****

 } // Photoservice
 export interface UserPhoto {
   filepath: string;
   webviewPath: string;
  // base64?= string;
  // esta  llave es de arriba no borrar
}


