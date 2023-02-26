import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import Backendless from 'backendless';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';


const APP_ID = 'E740B979-B083-ED0C-FFD3-2EDE3126C400';
const API_KEY = 'C1B30CED-2B0D-425D-BCD1-3A4C50A84765';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

@NgModule({
  declarations: [
    AppComponent, LoginComponent, UserComponent, PostComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
