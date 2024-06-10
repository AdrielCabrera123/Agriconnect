import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';  // Asegúrate de que esto apunte al archivo correcto
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    InicioComponent,
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Otros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
