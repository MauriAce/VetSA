import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { PhotoService } from '../services/photo.service';
import { PickerController } from '@ionic/angular';
import { Tarea } from '../tarea';
import { GetapiService } from '../services/getapi.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],

})
export class AdminPage implements OnInit {
  myModel: any; // Modelo de datos
  tareaEditando: Tarea; //
  getdata: any [] = [];  // api
  usuarios = [];
  constructor(
    public navCtrl: NavController,
    private firestore: FirestoreService,
    public photoService: PhotoService,
    public _services :GetapiService,

  ) {
    this.myModel = {}; // Inicializacion del modelo como un objeto vacio.

    // Crear una tarea vacía
    this.tareaEditando = {} as Tarea;
    // api
   // this._services.getdata<any[]>("").subscribe(data => {
    //  this.getdata = data
    //  console.log(this.getdata)
    //})
    // api rick
    this._services.getdata<any>("https://rickandmortyapi.com/api/character ").subscribe(res => {
      console.log(res);
      this.usuarios = res.results;

    })

  }
  // api  rick 14-11
  ionViewDidLoad() {
    this._services.obtenerdatos()
      .subscribe(
        (data) => {
          this.usuarios = data
        })  }

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
