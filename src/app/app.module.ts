import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
declarations: [
AppComponent,
DialogComponent
],
imports: [
BrowserModule,
AppRoutingModule,
BrowserAnimationsModule,
ReactiveFormsModule,
MatDialogModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
