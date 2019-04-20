// Importa Input, para poder comunicarse con otros componentes.
import { Component, OnInit, Input } from '@angular/core';

// Importa modelo image
import { Image } from '../../models/image';

// Importa servicio.
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

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

}
