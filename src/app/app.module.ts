import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule}     from './angular-material.module';
import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { environment }             from '../environments/environment';
import { MainLayoutComponent }     from './layout/main-layout/main-layout.component';
import {MatMenuModule}             from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              AngularMaterialModule,
              MatMenuModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
