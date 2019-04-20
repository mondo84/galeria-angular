import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

// Se captura el input enviado desde el componente image-detail.
@Input() imageSelected;

  constructor() { }

  ngOnInit() {
  }

}
