import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AuthGardService } from './services/auth-gard.service';
import { AuthenticationService } from './services/authentication.service';
import { DbserviceService } from './services/dbservice.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
    SQLite,
    DbserviceService, 
    AuthGardService, 
    AuthenticationService],
    
  bootstrap: [AppComponent],
})
export class AppModule {}


