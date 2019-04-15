/* Input, habilita entrada de datos de otros componentes */
import { Component, OnInit, Input } from '@angular/core';

/* import del modelo, Image */
import { Image } from '../../models/image';

@Component({
  selector: 'ng-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

/* decorador input. input binding */
/* variable tipo Image. recibe datos de image-list.ts */
@Input() selectedImage: Image; /* disponible para este componente */

  constructor() { }

  ngOnInit() {
  }

}
