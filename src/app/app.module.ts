import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourceDropdownComponent } from './source-dropdown/source-dropdown.component';
import { TargetDropdownComponent } from './target-dropdown/target-dropdown.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { OutputBoxComponent } from './output-box/output-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SourceDropdownComponent,
    TargetDropdownComponent,
    InputBoxComponent,
    OutputBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
