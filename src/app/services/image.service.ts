import { Injectable } from '@angular/core';

// Importa el modelo Image.
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

// objeto disponible a la plantilla .html
images: Image[] = [ 
new Image ('1','titulo1','desc 1',
'https://videotutoriales.com/maspa/maspa1.jpg',
'imagen grande'),

new Image ('2','titulo2','desc 2',
'https://videotutoriales.com/maspa/maspa2.jpg',
'imagen grande'),

new Image ('3','titulo3','desc 3',
'https://videotutoriales.com/maspa/maspa3.jpg',
'imagen grande'),

new Image ('4','titulo4','desc 4',
'https://videotutoriales.com/maspa/maspa5.jpg',
'imagen grande')
];

  constructor() { }

  getImages(){
	return this.images;
  }
}
