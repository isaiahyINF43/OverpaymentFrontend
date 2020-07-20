import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/layouts/header/header.component';
import { OverpaymentsComponent } from './components/overpayments/overpayments.component';
import { MatTableModule } from '@angular/material/table';
import { ControloverpaymentsComponent } from './components/controloverpayments/controloverpayments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverpaymentsComponent,
    ControloverpaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
