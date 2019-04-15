import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* importacion modulo de rutas de la aplicacion */
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

/* importacion de componentes */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';

/* importacion de servicio */
import {ImageService} from './service/image.service';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const rutasApp: Routes = [
	{ path: '', redirectTo: '/gallery', pathMatch: 'full'},
	{ path: 'gallery', component: GalleryComponent},
	{ path: 'contact', component: ContactComponent},
	{ path: 'about',   component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutasApp)
  ],
providers: [ImageService], /* declaracion de servicios */
  bootstrap: [AppComponent]
})
export class AppModule { }
