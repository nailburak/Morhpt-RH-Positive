import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CunsumerComponent } from './cunsumer/cunsumer.component';
import { AdminComponent } from './admin/admin.component';
import { CHomeComponent } from './c-home/c-home.component';
import { AHomeComponent } from './a-home/a-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CunsumerComponent,
    AdminComponent,
    CHomeComponent,
    AHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
