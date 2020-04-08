import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppComponentAnimationTemplateModule } from 'app-component-animation-template';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppComponentAnimationTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
