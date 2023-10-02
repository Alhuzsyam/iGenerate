import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from "ngx-progressbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { NetworkInterceptor } from './network.interceptor';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
