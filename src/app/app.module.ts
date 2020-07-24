import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinfoModule } from './userinfo/userinfo.module';
import { UserregsreService } from './userregsre.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserinfoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserregsreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
