import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './app-highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, AngularMaterialModule ],
  declarations: [
    AppComponent,
    HighlightDirective,
    ModalComponent
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ModalComponent]
})
export class AppModule { }