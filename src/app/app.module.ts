import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';
import { NavbarComponent } from './mycontainer/navbar/navbar.component';
import { HeaderComponent } from './mycontainer/header/header.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignupComponent } from './signup/signup.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { SongComponent } from './song/song.component';
 

@NgModule({
  declarations: [
    AppComponent,
    MycontainerComponent,
    NavbarComponent,
    HeaderComponent,
    Content1Component,
    Content2Component,
    Content3Component,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DownloadComponent,
    HomeComponent,
    SongComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
