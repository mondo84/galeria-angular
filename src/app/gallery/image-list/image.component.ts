<<<<<<< HEAD
// importa Input, para comunicarse con otros componentes.
import { Component, OnInit, Input } from '@angular/core';

// importa el modelo image.
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d
import { Image } from '../../models/image';

@Component({
  selector: 'ng-image',
  templateUrl: './image.component.html',
<<<<<<< HEAD
  styles: [`	
	img{
-webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
margin-bottom: 20px;
}

img:hover{
filter: gray;
-webkit-filter: grayscale(1);
}

a:hover{
	cursor: pointer;
}
`]

})
export class ImageComponent implements OnInit {

// captura el Input enviado desde el componente image-list.
@Input() image: Image;
=======
  styles: [ 
`.img-st {
width: 200px;
height: 250px;

 }`
  ]
})
export class ImageComponent implements OnInit {
@Input() objImage: Image;
>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d

  constructor() { }

  ngOnInit() {
  }

}
