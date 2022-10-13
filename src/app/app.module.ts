import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularSplitModule } from 'angular-split';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatTreeModule,
    MatMenuModule,
    AngularSplitModule,
  ],
  declarations: [AppComponent, PopupMenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
