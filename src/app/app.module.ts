import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularSplitModule } from 'angular-split';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [BrowserModule, FormsModule, MatIconModule,MatTreeModule, AngularSplitModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
