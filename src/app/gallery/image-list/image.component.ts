import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'ng-image',
  templateUrl: './image.component.html',
  styles: [ 
`.img-st {
width: 200px;
height: 250px;

 }`
  ]
})
export class ImageComponent implements OnInit {
@Input() objImage: Image;

  constructor() { }

  ngOnInit() {
  }

}
