import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulo de rutas. Para archivo independiente de rutas.
import { AppRoutingModule } from './app-routing.module';

// Importa componentes del proyecto.
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';

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
    RouterModule.forRoot(appRoutes),
    AppRoutingModule // Archivo independiente de rutas.
  ],
  providers: [ImageService], // agregamos el servicio al proyecto.
  bootstrap: [AppComponent]  // componente de arranque. (principal).
})
export class AppModule { }
