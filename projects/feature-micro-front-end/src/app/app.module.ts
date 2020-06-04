import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { FSCButtonModule } from '../../../feature-shared-components/src/lib/components/fsc-button/fsc-button.module';
import { FSCTextboxModule } from '../../../feature-shared-components/src/lib/components/fsc-textbox/fsc-textbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FSCButtonModule,
    FSCTextboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
