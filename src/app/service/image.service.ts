import { Injectable } from '@angular/core';

/* Importacion de la clase modelo */
import { Image } from '../models/image';

/* Decorador que indica que se puede inyectar este servicio en cualquier componente de la aplicacion */
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  /* array de objetos Image */
  objImage: Image[] = [
new Image('1','Titulo 1','Descripcion 1',
'../../assets/fotos/fabian1.jpg','link img'),
new Image('2','Titulo 2','Descripcion 2',
'../../assets/fotos/fabian2.jpg','link img'),
new Image('3','Titulo 3','Descripcion 3',
'../../assets/fotos/fabian3.jpg','link img'),
new Image('4','Titulo 4','Descripcion 4',
'../../assets/fotos/fabian4.jpg','link img'),
new Image('5','Titulo 5','Descripcion 5',
'../../assets/fotos/fabian5.jpg','link img')
	];
constructor() { }
 
/* metodo que devuelve el objeto con las imagenes */
 getImages(){
   return this.objImage;
 }

}
