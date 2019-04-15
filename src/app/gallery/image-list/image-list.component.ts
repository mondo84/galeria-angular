import { Component, OnInit, Input } from '@angular/core';

/* importacion del modelo */
import { Image } from '../../models/image';

/* importacion del servicio */
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

/* array de imagenes vacio */
objImages: Image[] = [];
 
  constructor(private img_servicio: ImageService ) { }
  
  /* metodo life cycle hook */
  ngOnInit() {
  /* llamado al metodo del servicio, que llena 
     el array vacio de imagenes */
   this.objImages = this.img_servicio.getImages();
  }

}
