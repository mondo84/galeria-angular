<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';

=======
/* Input, habilita entrada de datos de otros componentes */
import { Component, OnInit, Input } from '@angular/core';

/* import del modelo, Image */
import { Image } from '../../models/image';

>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d
@Component({
  selector: 'ng-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

<<<<<<< HEAD
// Se captura el input enviado desde el componente image-detail.
@Input() imageSelected;
=======
/* decorador input. input binding */
/* variable tipo Image. recibe datos de image-list.ts */
@Input() selectedImage: Image; /* disponible para este componente */
>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d

  constructor() { }

  ngOnInit() {
  }

}
