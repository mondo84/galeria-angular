<<<<<<< HEAD
// Importa Input, para poder comunicarse con otros componentes.
import { Component, OnInit, Input } from '@angular/core';

// Importa modelo image
import { Image } from '../../models/image';

// Importa servicio.
import { ImageService } from '../../services/image.service';
=======
import { Component, OnInit, Input } from '@angular/core';

/* importacion del modelo */
import { Image } from '../../models/image';

/* importacion del servicio */
import { ImageService } from '../../service/image.service';
>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

<<<<<<< HEAD
// objeto disponible a la plantilla .html
images: Image[] = [];

// imagen seleccionada del listado.
imageSelected: Image;

// Inyeccion del servicio a este componente.
constructor( private argImg: ImageService) { }

  ngOnInit() {
	this.images = this.argImg.getImages();
  }

// metodo que devuelve la imagen
// seleccionada del listado.
onSelect(image: Image){
 return this.imageSelected = image;
}

=======
/* array de imagenes vacio */
objImages: Image[] = [];
selectedImage: Image;

accion: boolean = false;
 
  constructor(private img_servicio: ImageService ) { }
  
  /* metodo life cycle hook */
  ngOnInit() {
  /* llamado al metodo del servicio, que llena 
     el array vacio de imagenes */
   this.objImages = this.img_servicio.getImages();
  }
  
  /* pasa los datos de la imagen seleccionada al atributo selectedImage */
  onSelect(image:Image){
    this.selectedImage = image;
  }
>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d
}
