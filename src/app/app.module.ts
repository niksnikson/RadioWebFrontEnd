import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LandingComponentComponent } from './components/landing-component/landing-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import {AppRoutingModule} from './app-routing.module';
import { RegisterComponent } from './components/register/register.component'
import {AuthService} from './service/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponentComponent,
    LoginComponentComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
