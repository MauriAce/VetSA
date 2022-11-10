import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { PhotoService } from '../services/photo.service';
import { PickerController } from '@ionic/angular';
import { Tarea } from '../tarea';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],

})
export class AdminPage implements OnInit {
  myModel: any; // Modelo de datos
  tareaEditando: Tarea; //

  constructor(
    public navCtrl: NavController,
    private firestore: FirestoreService,
    public photoService: PhotoService,

  ) {
    this.myModel = {}; // Inicializacion del modelo como un objeto vacio.

    // Crear una tarea vacía
    this.tareaEditando = {} as Tarea;
  }

  ngOnInit() {
  }

  getMascota() {
    this.firestore.getCollection();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  //
  clicBotonInsertar() {
    this.firestore.insertar("Mascota", this.tareaEditando).then(() => {
      console.log('Guardado con exito !!!');
      window.alert('Guardado con exito !!!');
      this.tareaEditando = {} as Tarea;
    }, (error) => {
      console.error(error);
    });
  }

  //

  

}
