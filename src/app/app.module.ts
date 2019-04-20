import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
// Modulo de rutas. Para archivo independiente de rutas.
import { AppRoutingModule } from './app-routing.module';

// Importa componentes del proyecto.
=======
/* importacion modulo de rutas de la aplicacion */
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

/* importacion de componentes */
>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';

<<<<<<< HEAD
// Importa servicio ImageService.
import { ImageService } from './services/image.service';

// componentes del proyecto.
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './gallery/contact/contact.component';
import { AboutComponent } from './gallery/about/about.component';

// imports del modulo de rutas.
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
	{path: '', redirectTo: '/gallery', pathMatch: 'full'},
	{path: 'gallery', component: GalleryComponent},
	{path: 'about', component: AboutComponent},
	{path: 'contact', component: ContactComponent}
=======
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
>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d
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
<<<<<<< HEAD
    RouterModule.forRoot(appRoutes),
    AppRoutingModule // Archivo independiente de rutas.
  ],
  providers: [ImageService], // agregamos el servicio al proyecto.
  bootstrap: [AppComponent]  // componente de arranque. (principal).
=======
    AppRoutingModule,
    RouterModule.forRoot(rutasApp)
  ],
providers: [ImageService], /* declaracion de servicios */
  bootstrap: [AppComponent]
>>>>>>> 2431d48bb4e93f3a3a491d5951e4eba9b2d6a58d
})
export class AppModule { }
